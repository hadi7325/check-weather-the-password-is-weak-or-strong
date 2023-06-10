import React from 'react'
import zxcvbn from 'zxcvbn'
function Progress({ password }) {
    const resultTest = zxcvbn(password)
    const progressWidth = resultTest.score * 100 / 4;
   
    const backColor = () => {
        switch (resultTest.score) {
            case 0:
                return "#999"
            case 1:
                return "red"
            case 2:
                return "yellow"
            case 3:
                return "#9bc158"
            case 4:
                return "#00b500"
            default:
                return "none"

        }
    }
   
    const textPass = () => {
        switch (resultTest.score) {
            case 0:
                return "خیلی ضعیف"
            case 1:
                return "ضعیف"
            case 2:
                return "متوسط"
            case 3:
                return "خوب"
            case 4:
                return "قوی"
            default:
                return ""

        }
    }
    const progressStyle = () => ({
        height: "5px",
        background: backColor(),
        width: `${progressWidth}%`

    })

    return (
        <>
            <div className="progress mt-3" style={{ height: "5px" }}>
                <div className="progress-bar" role="progressbar" style={progressStyle()} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span style={{ color: backColor() }}>{textPass()}</span>
        </>
    )
}

export default Progress