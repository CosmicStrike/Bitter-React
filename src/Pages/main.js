import React from "react";
import Navbar from '../Components/navbar'

class Main extends React.Component {

    render() {

        return (
            <>
                <Navbar />
                <>
                    <main>
                        <div id="text-modal" class="relative z-10" hidden aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-10 overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div
                                        class="relative mb-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                                        <div class="bg-white px-4 pt-2 pb-2 sm:p-6 sm:pb-4 border">
                                            <div class="sm:flex sm:items-start mt-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <p class="text-lg font-medium">New Post</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                <textarea name="content" id="postcontent" cols="30" rows="10"
                                                    class="w-full resize-none px-5 py-5 focus:outline-none"></textarea>
                                            </p>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="button" id="post_btn"
                                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                                                Post
                                            </button>
                                            <button type="button" id="cancle_btn"
                                                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="image-modal" class="relative z-10" hidden aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-10 overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div
                                        class="relative mb-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                                        <div class="bg-white px-4 pt-2 pb-2 sm:p-6 sm:pb-4 border">
                                            <div class="sm:flex sm:items-start mt-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <p class="text-lg font-medium">New Post</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="post-image-container flex flex-col items-center" >
                                                <img src="" alt="" id="post_image" class="" />
                                                <form id="image_form" method="POST" enctype="multipart/form-data" action="/sendimage">
                                                    <label for="image_upload" class="cursor-pointer" >Upload Image</label>
                                                    <input type="file" id="image_upload" name="image" accept="image/*" class="w-0 h-0" />
                                                </form>
                                                <p id="username" class="font-medium text-xl "></p>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="button" id="post_image_btn"
                                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                                                Post
                                            </button>
                                            <button type="button" id="cancle_image_btn"
                                                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="postbox-container flex flex-row md:mx-36 lg:mx-80 mt-16">
                            <div class="postbox px-2 w-full flex flex-row mb-8">
                                <div class="pfp min-w-[45px] min-h-[45px] pt-4 pr-4">
                                    <img id="u_image" src="" alt="pfp" class="min-w-[45px] max-w-[45px] h-[45px] rounded-full" />
                                </div>
                                <div class="input my-4 w-full">
                                    <input id="postbox"
                                        class="border border-black w-full rounded-full px-4 h-12 focus:outline-none hover:bg-gray-200 hover:cursor-pointer"
                                        placeholder="Have a topic that excites you? Post about it" readonly />
                                </div>
                                <span class="material-icons pt-8 ml-4 hover:cursor-pointer" id="image-modal-btn">image</span>
                            </div>
                        </div>
                        <div class="post-area w-full flex flex-col px-1 md:px-36 lg:px-80" id="post_section"></div>
                        <script src="/static/js/main.js"></script>
                    </main>
                </>
            </>)
    }
}

export default Main