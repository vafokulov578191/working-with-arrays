let movies = [
    {
        "ID": "1",
        "Title": "Guardians of the Galaxy",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "01 Aug 2014",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Comedy, Sci-Fi",
        "Director": "James Gunn",
        "Writer": "James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        "Plot": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 2 Oscars. Another 52 wins & 100 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "8.0",
        "imdbVotes": "1,045,658",
        "imdbID": "tt2015381",
        "Type": "movie",
        "DVD": "15 Nov 2015",
        "BoxOffice": "$333,718,600",
        "Production": "Marvel Studios, Moving Picture Company, Marvel Enterprises",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "2",
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "05 May 2017",
        "Runtime": "136 min",
        "Genre": "Action, Adventure, Comedy, Sci-Fi",
        "Director": "James Gunn",
        "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "7.6",
        "imdbVotes": "573,212",
        "imdbID": "tt3896198",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$389,813,101",
        "Production": "Marvel Studios, Walt Disney Pictures",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "3",
        "Title": "The Avengers",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "04 May 2012",
        "Runtime": "143 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Joss Whedon",
        "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "Language": "English, Russian, Hindi",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.0",
        "imdbVotes": "1,263,208",
        "imdbID": "tt0848228",
        "Type": "movie",
        "DVD": "22 Nov 2015",
        "BoxOffice": "$623,357,910",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "4",
        "Title": "Avengers: Age of Ultron",
        "Year": "2015",
        "Rated": "PG-13",
        "Released": "01 May 2015",
        "Runtime": "141 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Joss Whedon",
        "Writer": "Joss Whedon, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (character created by: Captain America), Jack Kirby (character created by: Captain America), Jim Starlin (character created by: Thanos)",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
        "Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        "Language": "English, Korean",
        "Country": "USA",
        "Awards": "8 wins & 49 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "75%"
            },
            {
                "Source": "Metacritic",
                "Value": "66/100"
            }
        ],
        "Metascore": "66",
        "imdbRating": "7.3",
        "imdbVotes": "748,735",
        "imdbID": "tt2395427",
        "Type": "movie",
        "DVD": "08 Sep 2015",
        "BoxOffice": "$459,005,868",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "5",
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "27 Apr 2018",
        "Runtime": "149 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
        "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 46 wins & 73 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.4",
        "imdbVotes": "839,788",
        "imdbID": "tt4154756",
        "Type": "movie",
        "DVD": "31 Jul 2018",
        "BoxOffice": "$678,815,482",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "6",
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "26 Apr 2019",
        "Runtime": "181 min",
        "Genre": "Action, Adventure, Drama, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "Language": "English, Japanese, Xhosa, German",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 69 wins & 102 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.4",
        "imdbVotes": "816,700",
        "imdbID": "tt4154796",
        "Type": "movie",
        "DVD": "30 Jul 2019",
        "BoxOffice": "$858,373,000",
        "Production": "Marvel Studios, Walt Disney Pictures",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "7",
        "Title": "Doctor Strange",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "04 Nov 2016",
        "Runtime": "115 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "Scott Derrickson",
        "Writer": "Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)",
        "Actors": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
        "Plot": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 19 wins & 66 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "7.5",
        "imdbVotes": "600,090",
        "imdbID": "tt1211837",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$232,641,920",
        "Production": "Marvel Studios, Marvel Entertainment",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "8",
        "Title": "Spider-Man: Homecoming",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "07 Jul 2017",
        "Runtime": "133 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Jon Watts",
        "Writer": "Jonathan Goldstein (screenplay by), John Francis Daley (screenplay by), Jon Watts (screenplay by), Christopher Ford (screenplay by), Chris McKenna (screenplay by), ErikSommers (screenplay by), Jonathan Goldstein (screen story by), John Francis Daley (screen story by), Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by)",
        "Actors": "Tom Holland, Michael Keaton, Robert Downey Jr., Marisa Tomei",
        "Plot": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "7 wins & 10 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "7.4",
        "imdbVotes": "515,323",
        "imdbID": "tt2250912",
        "Type": "movie",
        "DVD": "10 Jul 2017",
        "BoxOffice": "$334,201,140",
        "Production": "Columbia Pictures, Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "9",
        "Title": "Spider-Man: Far from Home",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "02 Jul 2019",
        "Runtime": "129 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Jon Watts",
        "Writer": "Chris McKenna, Erik Sommers, Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)",
        "Actors": "Tom Holland, Samuel L. Jackson, Jake Gyllenhaal, Marisa Tomei",
        "Plot": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
        "Language": "English, Italian, Czech",
        "Country": "USA",
        "Awards": "10 wins & 22 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "6.9",
        "imdbRating": "7.5",
        "imdbVotes": "325,685",
        "imdbID": "tt6320628",
        "Type": "movie",
        "DVD": "27 Aug 2019",
        "BoxOffice": "$390,532,085",
        "Production": "Columbia Pictures, Pascal Pictures, Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "10",
        "Title": "Ant-Man",
        "Year": "2015",
        "Rated": "PG-13",
        "Released": "17 Jul 2015",
        "Runtime": "117 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 33 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "6.4",
        "imdbRating": "7.3",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "11",
        "Title": "red-notice",
        "Year": "2021",
        "Rated": "PG-13",
        "Released": "17 Jul 2015",
        "Runtime": "117 min",
        "Genre": "action, comedy, crime",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Red Notice's big budget and stellar cast add up to a deftly competent action-comedy.",
        "Poster": "../img/1170974.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "6.5",
        "imdbRating": "7.3",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "12",
        "Title": "Jumanji: Welcome to the Jungle",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "17 Jul 2015",
        "Runtime": "117 min",
        "Genre": "action, comedy, crime",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "They will have a fight with rhinoceroses, black mambas, and at every turn there will be an endless series of traps and puzzles.",
        "Poster": "../img/Dwayne_Johnson_Karen_Gillan_Men_Jumanji_Welcome_to_533402_1280x853.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "6.9",
        "imdbRating": "7.0",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "13",
        "Title": "Mr. Bean (1997)",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "17 Jul 1997",
        "Runtime": "90 min",
        "Genre": "comedy, adventure, family",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1997 feature film produced by PolyGram Filmed Entertainment in association with Working Title and Tiger Aspect Films.",
        "Poster": "../img/1920x.jpg",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "7.3",
        "imdbRating": "8.0",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "14",
        "Title": "Exodus: Gods and Kings (2014)",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "17 Jul 2014",
        "Runtime": "90 min",
        "Genre": "fantasy, action, drama, adventure",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "The film tells the story of the biblical prophet Moses, played by Christian Bale.",
        "Poster": "../img/exodus kings.webp",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "6.6",
        "imdbRating": "5.0",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "15",
        "Title": "King Arthur sword",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "17 Jul 1997",
        "Runtime": "90 min",
        "Genre": "fantasy, action, drama, adventure",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "The sword begins to change Arthur. As a result, he joins the resistance and a mysterious young girl named Guinevere.",
        "Poster": "../img/arthur.webp",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "7.7",
        "imdbRating": "7.2",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "16",
        "Title": "Rage",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "17 Jul 1997",
        "Runtime": "90 min",
        "Genre": "action, drama, military",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Rage American military action adventure film directed by David Ayer, released in 2014. The film tells about the events on the Western Front at the end of World War II. It stars an ensemble of American actors led by Brad Pitt, Logan Lerman and Shia LaBeouf.",
        "Poster": "../img/rage.webp",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "7.4",
        "imdbRating": "7.0",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "ID": "17",
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "17 July 1997",
        "Runtime": "90 min",
        "Genre": "fantasy, action, thriller, crime, drama",
        "Director": "Peyton Reed",
        "Writer": "Edgar Wright (screenplay by), Joe Cornish (screenplay by), Adam McKay (screenplay by), Paul Rudd (screenplay by), Edgar Wright (story by), Joe Cornish (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",
        "Actors": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
        "Plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1997 feature film produced by PolyGram Filmed Entertainment in association with Working Title and Tiger Aspect Films.",
        "Poster": "../img/joker.webp",
        "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",

                "Value": "64/100"
            }
        ],
        "Metascore": "8.5",
        "imdbRating": "8.0",
        "imdbVotes": "572,212",
        "imdbID": "tt0478970",
        "Type": "movie",
        "DVD": "24 Feb 2016",
        "BoxOffice": "$180,202,163",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
]


export {movies}