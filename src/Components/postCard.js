import React from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
export default function PostCard(props) {

    // const user = localStorage.getItem('Loign')
    const OnDelete = () => { }
    let deletePost = <></>
    if (true) {
        deletePost = <div class="group/options flex flex-row">
            <span class="material-icons right-0 hidden absolute hover:cursor-pointer group-hover:block">
                keyboard_arrow_down
            </span>
            <div class="group-hover/options:block absolute hidden w-24 top-4 right-1 z-1 shadow-xl">
                <p class="py-2 pl-2 hover:cursor-pointer bg-white hover:bg-gray-300" onClick={OnDelete}>
                    Delete
                </p>
            </div>
        </div>
    }


    return (
        <div class="post group flex flex-col shadow-md w-full pb-2 mb-2 " id={props.postid}>
            <div class="first-row flex flex-row w-full">
                <div
                    class="pfp-container max-w-[45px] min-w-[45px] min-h-[45px] pt-1 pr-4 mx-2"
                >
                    <img src={props.userImage} alt="pfp" class="min-w-[45px] h-[45px] rounded-full" />
                </div>
                <div class="fullname-date flex flex-col w-full">
                    <div class="fullname mb-[-5px] flex flex-row w-full place-content-between">
                        <p class="text-lg font-medium ">{props.fullname}&nbsp;</p>
                        <div class="flex flex-row relative">
                            <p class="pr-8 text-xs ">{props.date}</p>

                            {deletePost}
                        </div>
                    </div>
                    <div class="username">
                        <a href="" class="hover:underline underline-offset-1 accent-black font-medium text-gray-500 text-sm" >{props.user}</a>
                    </div>
                </div>
            </div>
            <div class="content pl-16 pr-2 whitespace-pre-wrap text-lg">{props.content_type === "image" ? `<img src="/post/images/${props.content}">` : props.content}</div>
            <div class="buttons-row flex flex-row">
                <div class="lc flex flex-row pl-16 pt-4">
                    <span class="material-icons w-full h-4 hover:cursor-pointer">{props.islike ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />
                    }</span>
                    <p class="pl-2">{props.lc}</p>
                </div>
                <div class="dlc flex flex-row pl-4 pt-4">
                    <span class="material-icons w-full h-4 hover:cursor-pointer">{props.isdislike ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />
                    }</span>
                    <p class="pl-2">{props.dlc}</p>
                </div>
            </div>
        </div>
    )
}