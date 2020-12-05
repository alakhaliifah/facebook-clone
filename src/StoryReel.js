import React from 'react';
import Story from './Story';
import "./StoryReel.css";

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images.pexels.com/videos/2072695/free-video-2072695.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://pbs.twimg.com/profile_images/847023639442718720/jovvA-fI.jpg"
                title="Abdirahman Khalif"
            />
            <Story 
                image="https://miro.medium.com/max/945/1*2yUCRg2T4zLmC2BqoKZMrw.jpeg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSdT7rmcoMkjXjZ4w7IL9J7pppYLweUapZA&usqp=CAU"
                title="Karina Kapor"
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQcFlqPVXcjwHG0fRtN_aPMAlnm6H7BPAew&usqp=CAU"
                profileSrc="https://i.guim.co.uk/img/media/fdbe87ad9a2e1f51b1df0fd96ab949c04efa9425/0_0_3600_2160/master/3600..jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b3715eb3a13c9c4f3d0ff935d02e3535"
                title="Nisha John"
            />
            <Story 
                image="https://solarsystem.nasa.gov/internal_resources/1038"
                profileSrc="https://play-images-prod-cms.tech.tvnz.co.nz/api/v1/web/image/content/dam/images/entertainment/shows/p/person-of-interest/personofinterest_coverimg.png.2017-03-08T11:21:33+13:00.jpg?width=960&height=540"
                title="Li Win"
            />
            <Story 
                image="https://pub-static.haozhaopian.net/assets/projects/pages/7a5f87d0-4f15-11ea-bade-c3cd2c88a01e_6abdcc00-5afa-4bd9-8394-1f577bea31e0_thumb.jpg"
                profileSrc="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                title="Farnando Ji"
            />
        </div>
    )
}
