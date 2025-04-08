import s from "./post.module.css"

const Post = (props:any) => {
    return (
        <div className={s.item}>
                <img
                    src='https://yandex-images.clstorage.net/rTM501M88/3f5cf72XQD/ua9_ZcVp7zvSLkbDZCCYMsObtK3smZ9EK2XOC3-IQEOwRH2HKOInafxe4Ue0Qo8wor1FBZmJjzJGAUXnqNtvUPr6MjaFN6g71zoNySg6lCLW16nu-duGQCw8wggYtDRkw30EtlfBWB68Xr9F5wKZJLKDKRbi8r0kEGUy-6m6Mja-mX1c8E-DPd8rA91kFKkmyuS9vcHDhi0qcLFqP7s7UNBbLb1v7HI8qEqwUeY1_AKivR5O3s-lPyFzANeVowwlh4V9RvBqphPfHDLVUDS-GOnEsZrZxaY9OGOmTwqSL3f3Qymgb-hpHbBtvErnCvYHrqsRVc3Zpg4OWhf1qIUoE5qfYnL4T5Qlzzsf_EMWjCXw_ZWG1_O6AxFrsEgWmh197FcItFLXUBm0VYRzzTHtII20J0Pu2bg_Nk48wpWcKi26pUF13VeOL_4yAvhMB5Ub7taTkcrSvgwme6V_CI4SX8lMGKh_9VcZlXWYTcwV_TG9rAxVzMycPhx-IsytmDoOiohJbv1Trjz4KivLbiG9HNjGsanc5p8UNUmhXzGoGGrzbzOCfOpgM59rlHfDI9EfqbgGZPvnsDAdWBj7o5EcJpuHUk3WQJMixTob2UcKhDne05WO6-O_NTRlgHIDkRhW-0YBtG3CcB6AUaBRyz_gH7OmPFPL0I46GWE_zrOyIyabiURS0HKML9AvG_J_BqoE_sSdseDjui0LcIFZDo4sROlmO41RwHgAiXqAddIv2CShmhN718eMNyZeNey8nCwSpY14ZflelCf1GAvLcyKFIf39jK7h0owTO2ykQSymPGTRQB-Ja_59OKJamEPMMvgYlqkxYMrtkzgCWQPdo7IIGIi8SGzSWasV5ToY7m8Gjjjv352k0f-gNjhVhUIErAxR71A4g2zLSzmiW6tMxjPhMYqsHVfh-a4FGl4TwLabGjCYtmxS1miRFeUZCd9SKJAa9f-0vsL4kQwtZbBMApM' alt={props.id}/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;

