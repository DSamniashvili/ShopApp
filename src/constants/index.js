import { Dimensions } from "react-native";

const Constants = {
    apis: {
        "mainAPI": "https://api.themoviedb.org/3/trending/movie/week?api_key=ef14d9d59599c16d7186f40a1b3b4eda"
    },
    WINDOW_DIMENSION: Dimensions.get("window"),
    SCREEN_DIMENSION: Dimensions.get("screen"),
    WINDOW_WIDTH: Dimensions.get("window").width,
    WINDOW_HEIGHT: Dimensions.get("window").height,
}

export default Constants;