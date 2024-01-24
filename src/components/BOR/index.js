import React from 'react'
import IOT from '../../images/IOT.gif'
import Pot from '../../images/Pot.gif'
import RC from '../../images/RC.gif'
import Radar from '../../images/Radar.avif'
import Robocon from '../../images/Robocon.png'
import { BorContainer, Desc, GifImage, Holder, Holdertwo, Image, Segment, Title } from './borelements'

const Borsegment = () => {
return (
    <BorContainer>
        <Title><h1>Basics of Robotics</h1></Title>
            <Segment>
            <Image src={Robocon} alt="Robocon" />
                    <Desc>
                        
                        Basics of Robotics (BOR) is our signature workshop, which we host every semester with enthusiasm and
                        dedication. This comprehensive program serves as an introduction to the exciting world of robotics and
                        technology.<br /><br />

                        During the BOR workshop, we equip our fresher recruits with the fundamental knowledge and skills needed
                        to excel in the field of robotics. Participants dive into the captivating realms of Arduino and Sensor Fusion,
                        gaining hands-on experience that paves the way for their exciting journey into the world of robotics. Our
                        workshop stands out for its interactive and engaging curriculum. We believe that learning is most effective
                        when it's enjoyable and collaborative. That's why we bring together multiple experienced instructors and
                        passionate volunteers from ROBU, all committed to providing the best possible education environment.<br /><br />

                        At BOR, we prioritize quality education above all else. We understand that the future of robotics lies in the
                        hands of the next generation, and we are dedicated to nurturing their talents and potential. Through our
                        carefully designed projects and exercises, participants not only learn the theoretical aspects of robotics
                        but also apply their knowledge in practical scenarios. In line with the ever-evolving field of technology,
                        we continuously update our curriculum to stay current. Our most recent addition is the exploration of the
                        Internet of Things (IoT), a groundbreaking field that is reshaping the way we interact with the digital world.<br /><br />

                        Join us at BOR, where innovation and creativity meet, and embark on a journey that will expand your horizons,
                        spark your imagination, and equip you with the skills to shape the future of technology.

                        
                    </Desc>
            </Segment>
        <Title><h1>Basics of Robotics Curriculum</h1></Title>
        <Holdertwo>
            <GifImage src={Pot} alt="GIF" />
                <p>
                In our first two classes, we place a strong emphasis on laying a solid foundation in the world of
                electronics and microcontrollers. These early sessions are dedicated to  mastering  the  basics of
                Arduino and microcontrollers. We focus on LED-based hands-on
                projects, such as constructing traffic lights and brightness controllers and many more, using various
                input devices. This is a hands-on approach which allows our students to become familiar with Arduino,
                the Arduino  IDE, and  the  fundamentals of Arduino  programming. Through these  engaging  projects,
                our  students gain  valuable  practical  experience and develop a strong  understanding  of the core
                concepts that will serve as a solid platform for their further exploration of robotics and technology.
                </p>
            
        </Holdertwo>
        <Holder>
            
                <p>
                In the upcoming two classes, our main emphasis will be on sensors.
                We're excited to offer a wide array of sensors, including Sonar, Gas,
                Moisture, and IR, to our members. They'll gain in-depth knowledge of these sensors'
                working principles and engage in diverse sensor-oriented projects throughout the classes.
                Additionally, we'll further their understanding with advanced topics like sensor fusion,
                calibration, and hands-on Arduino coding for various sensors and libraries, enhancing their
                practical skills in the fascinating world of sensor technology. These classes will empower
                our members to become adept at harnessing sensor data for various applications, from
                environmental monitoring to robotics. By the end of the program, they'll have the expertise
                to innovate and create sensor-driven solutions that can make a positive impact in the fields
                they choose to explore.
                </p>
                <GifImage src={Radar} alt="AVIF" />
            
        </Holder>
        <Holdertwo>
            
                <GifImage src={RC} alt="GIF" />
                <p>
                    In the next classess our focus are on Relay, Motor Drivers, Motors, Servo, Bluetooth module. We go in details
                    with different concepts of Motors and their use case. We Assign groups to prepare different projects and show
                    them hands on making of RC Car.With this class studenst get familiar with wireless communication between devices
                    and build a deeper understanding of serial communication. Furthermore they build an exciting project paving the way
                    for building rover based projects in future. With this we conclude basics of Arduino robotics part of our course.
                </p>
            
        </Holdertwo>
        <Holder>
            
            <p>
                
                In this final segment of our course on the Internet of Things (IoT), we delve into the practical aspects of IoT
                development using the ESP32 platform. Students gain a comprehensive understanding of various wireless connectivity
                modes and the dynamics of server-client relationships. Through hands-on, interactive sessions, they create IoT-based
                projects such as Home Automation systems, enabling them to apply their knowledge in real-world scenarios.
                Additionally, they learn about WiFi-based communication by setting up and managing manual servers and using platforms like Blynk.
                With this module, we conclude our extensive course on the Basics of Robotics, equipping our members with valuable skills for the future.
            </p>
            <GifImage src={IOT} alt="GIF" />
        
    </Holder>
    </BorContainer>
)
}

export default Borsegment
