import React, { useEffect, useState } from "react"
import { Socket } from "socket.io-client"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store"
import { changeImagesClass } from "../../slice/componentClassSlice"
import styles from "./Images.module.scss"

interface ImageData {
    _id: string
    img: {
        length: number
        chunkSize: number
        uploadDate: string
        filename: string
        contentType: string
    }
    link: string
}

interface ImgSrc {
    imgUrl: string
    url: string
}

interface ErrorFromImageData {
    error: string
}

interface PropsType {
    socket: Socket
}

const Images: React.FC<PropsType> = ({ socket }) => {
    const dispatch = useAppDispatch()
    const dark: boolean = useAppSelector(
        (state: RootState) => state.darkLight.dark
    )
    const [imgSrc, setImgSrc] = useState<ImgSrc[]>([])

    useEffect(() => {
        dispatch(changeImagesClass(styles.images))
        const fetchController = new AbortController()
        const fetchData: () => void = async () => {
            try {
                const imgList: ErrorFromImageData | ImageData[] = await fetch(
                    `${process.env.REACT_APP_SERVER_URL}/image/all`,
                    {
                        signal: fetchController.signal,
                    }
                ).then((data) => data.json())
                if ("error" in imgList) {
                    setImgSrc([])
                    return
                }
                imgList.forEach((img: ImageData) => {
                    setImgSrc((imgSrc) => [
                        { imgUrl: img.img.filename, url: img.link },
                        ...imgSrc,
                    ])
                })
            } catch (err) {
                if (err instanceof Error) {
                    if (err.name !== "AbortError") {
                        console.log(err)
                    }
                }
            }
        }
        fetchData()
        socket.on("newImg", () => {
            setImgSrc([])
            fetchData()
        })
        return () => {
            fetchController.abort()
        }
    }, [])

    return (
        <div
            className={`${styles.images} ${dark ? styles.dark : styles.light}`}>
            {imgSrc.length === 0 ? (
                <p className={styles.notFound}>Không tìm thấy hình ảnh</p>
            ) : (
                <div className={styles.imagesBody}>
                    {imgSrc.map((source) => {
                        return (
                            <div
                                className={styles.imageContainer}
                                key={source.imgUrl}
                                onClick={() => {
                                    try {
                                        window.open(source.url, "_blank")
                                    } catch (err) {
                                        alert("Can't open link")
                                    }
                                }}>
                                <img
                                    key={source.imgUrl}
                                    src={`${process.env.REACT_APP_SERVER_URL}/image/${source.imgUrl}`}
                                    alt="img"
                                />
                                <p>{source.url}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Images
