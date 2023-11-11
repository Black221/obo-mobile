import { View, Image } from "react-native"
import { useState, useEffect } from "react"


const logoWhite = require("@assets/logo/logo-white.png")
const logoWhite1 = require("@assets/logo/logo-white-one.png")
const logoWhiteEmpty = require("@assets/logo/logo-white-empty.png")


export default function LoadingScreen () {

    const [loading, setloading] = useState({count: 0, total: 3})

    const IMAGE = [
        logoWhiteEmpty,
        logoWhite1,
        logoWhite,
    ]

    useEffect(() => {
        IMAGE.forEach((image) => {
            console.log(image)

        });
      }, [])


    const [render, setRender] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setRender(() => {
                if (render === 2) {
                    return 0
                }
                return render + 1
            })
        }, 1000)

    }, [render])


    return (
        <View style={
            {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            <View>
                <Image style={{
                    width: 200,
                    height: 200,
                }} source={IMAGE[render]} />
            </View>
        </View>
    )
}