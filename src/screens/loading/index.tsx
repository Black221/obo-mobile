import { View, Image } from "react-native"
import { useState, useEffect } from "react"



export default function LoadingScreen () {

    const IMAGE = [
        require("@assets/logo/logo-white-empty.png"),
        require("@assets/logo/logo-white-one.png"),
        require("@assets/logo/logo-white.png"),
    ]

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