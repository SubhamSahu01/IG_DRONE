document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.navigation-dot');
    const content = document.querySelector('.event-year');
    const Image = document.querySelector('.event-image img')

    const Data = {
        'April 2018': {
            description: 'We are one of India\'s leading drone firms in providing end-to-end Drone Solutions.',
            image: './Photos/images1.jpeg'
        },
        'April 2019': {
            description: 'This is the description for April 2019.',
            image: './Photos/images2.jpeg'
        },
        'April 2020': {
            description: 'This is the description for April 2020.',
            image: './Photos/images3.jpeg'
        },
        'April 2021': {
            description: 'This is the description for April 2021.',
            image: './Photos/images4.jpg'
        },
        'April 2022': {
            description: 'This is the description for April 2022.',
            image: './Photos/images5.jpeg'
        },
        'April 2023': {
            description: 'This is the description for April 2023.',
            image: './Photos/images6.jpeg'
        },
        'April 2024': {
            description: 'This is the description for April 2024.',
            image: './Photos/images7.jpg'
        }
    };


    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
            const dates = dot.getAttribute('date');

            content.classList.remove('active');
            Image.classList.remove('active');


            const { description, image } = Data[dates]

            setTimeout(() => {
                Image.src  = image;

                content.innerHTML = `<h2>${dates}</h2>
                                    <p>${description}</p>`;
                content.classList.add('active');
                Image.classList.add('active');
            }, 500);
        })
    })
})