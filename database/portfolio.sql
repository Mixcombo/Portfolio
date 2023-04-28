ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Mixer4422';

CREATE DATABASE portfolio;

use portfolio;

CREATE TABLE portfolio.message (
    id int not null AUTO_INCREMENT,
    text varchar(255),
    about varchar(255),
    project varchar(255),
    primary key (id)
);

INSERT INTO portfolio.message(id,text,about,project)
values (1,"Mixer's Portfolio",'Name: Wirawat Wiriyarungson','Space Invader Game using Python'),
(2,"I am from King Mongkut's University of Technology North Bangkok.",'Nickname: Mixer','Game Console Selling System using C language'),
(3,'I am a student in the Computer Science Department.',"Studied: King Mongkut's University of Technology North Bangkok",'DCM Viewer using ReactJS'),
(4,'I am interested in web development and I am currently learning Next.js.',"Faculty: Applied Science",'• Website for showing DCM files and chart from CSV files'),
(5,'Tel: 095-954-5523','Department: Computer Science','Bookstore Database Project using MySQL'),
(6,'Email: Wirawat.wiri@gmail.com', 'Hobbies: Playing games, Listening to music','Create game using Unreal Engine 4'),
(7,null,'Skills: Python, C, C++, Java, JavaScript, MySQL',null);