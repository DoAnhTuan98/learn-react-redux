

var initialState = [
    {
        id: 1,
        name: 'Iphone 7s',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAPDxAQEA8QEBUSDw8SEA8QEA8PFRIWFhUVFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFyseICUtMDArLSstKy4rNzc3Kys3Ky0rKysuLSs1LystKzc3LSstLSstLzcrLS0tLC0rLS0tLf/AABEIAPEA0QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABLEAACAQECBwwGBgkCBwEAAAAAAQIDBBEFBhIhMXGBBxMjMjM0QVFhc7K0CCJykbPBQ3SCkqHRFBVCUlNig6KxJPBUY6PCw9LhRP/EABoBAQEBAAMBAAAAAAAAAAAAAAABAgMEBgX/xAArEQEAAgECBQIEBwAAAAAAAAAAAQIDBBEFEiExQSJhscHR8AYTFCNRkaH/2gAMAwEAAhEDEQA/AJxAAAAADFwnb6dno1K9V3U6UXKTuvdy6EulvQl0tmUcTurVn+i2ejf6ta1R3xdcKcJ1F/fGD2AcDjJj5hCvUeRVlZqV/qUqUsmSXRlVF6zeppdhiYPx2wrQucbTOpHpjWurJ63L1vczTVEpWhR6MpI5/DuEau+tQlkpZ9F+bKcUuzR+JpEy4L3XNCtdlfbUoS/8c/8A2OywTjtg203KnaYRm9FOrwU7+pKV1+y8+XKOHqizTin2r8mbOxW2FZO7M1pWj8CK+lsbcYqeD7K68llzk1ChSTudWq9Cv6Fmbb6kQZjdui4SjK5WiaqtKUo05So0aEZcWKjBpyftNmrwXOU68KcpzdOm74QlOTpwfS4xvuWw0WOHHb/i2irK/wDlptUor+2XvA6XAW7LhSg0q01Xj1Tipfjml/cSLgHdtsVW6NppypS6XFpq/wBmV34NnziCD7MwTjPYbVcqFppyk9EG8ip9yVzNufEVC11IcScorqv9XatDOtwHum4VslyhaJSgv2JPKi+y6V6S1JAfWAISwFu8Rd0bZZ12zpNw/tbafvRIeBd0LBVrS3u0xhJ/sVeDf3n6r2MDqgUwmpJOLTT0NNNPaVAAAAAAAAAAAAAAAAADh906Kl+hReh1anwmdwcRul6bD3tT4TAhm0erXnd0SzGkw1Qbm5RuV/XoabvubWi550+03VvfD1PaZZbvNI42pZ6izuLa643SXvWgzsEzvr3wTyclpr/CN1VsdN57rn1xzM8o2ZRd97k+i/oAzcXo5Voua03ZursNHjqrpUl/NaPMzOgxaX+ob/mS96b+RocduPT9q0eamSRzAPcwuIqpuOSrk8q/O+i4qhRylmcb/wB1u5/iW2jwCudKUdKa2ZveeQm4u+LafWm0yqnWlHQ2uzo9xQ2BvcDY4YQsjvs9pqQXUpPJeuOh7UyUMTd3Ge+RpYTgnTk0v0mEbpQ7ZxWaS1JbSEQB9wUK0ZxjOElKE4qUJRacZRavTTWlNFZFXo84dlXwfVslSWVKx1UoX6VQqpyitko1Nly6CVQAAAAAAAAAAAAAAcNum6bD31T4R3JwW6tUyVYpXX5NWo2r7vVVLO9ivewCG7e+Hqayy5Fy3Ph6mss3mkelLYbKQMzFqX+ou6MpPbc/zNJjtx6ftWjzUzd4sQe/5XQpJPsvWn/fWaPHbj0/atHmpkkcwACK9TF54APcwuPAAB7eLwJn9GmXD4QXQ6VF+6U/zJ7ID9GrnGEO5peORPgAAAAAAAAAAAAAAOA3WuTsuuv5eR35H+61FuNiindlVaib6ouk1LbdeBDVvfD1NbLN5Xbnw9T2mWnI0j1lEpHjkUgbfFTlKmuHiRz+O/Hp+1aPNTN1ixUe/uK6ZK/Uv/txpcd+PT9q0eamSRy4AIoAAAAAAACZ/Rq5xb+5peOZPhAfo1c4t/c0vHMnwAAAAAAAAAAAAAAHA7q75h31T4TO+I/3WdFg7+p8JgQrb3w0/aMcvW7lqntMsmkAClsDa4qRTqzbWdTi0+p33f4bNHjvx6ftWjzUzd4qTuqyX704pbM/yNJjvx6ftWjzUySOXABFAAAAAAAATP6NXOLf3NLxzJ8ID9GrnFv7ml45k+AAAAAAAAAAAAAAAj7dceawd/U+EyQSPd13i2HvqnwWBClt5aesstly2vhp6y0zSDZS2GylsDY4rc4Wv5Gqx249P2rR5qZtMVn/AKjaavHXjU9do81MkjmACYtxzEWz1IfrK2qE4q+VKFS7eqcI6alS/M31J5ks/Sro3WvNKPcBYlYTtqU7NZKsqb0VJJU6b1SncnsNlhPc0wlZlGVek1Tlxp0oztCp+0qabS7bierXujYJoPIjVlUyc19KlOcNkrrnsMK1bpeDZq5b+7+lUWrvex0l3KaXJPbHM/2+cbTgerBSlBwrQhx5Um24LrlCSU4rXFGuJxxtwlY7TSlUozpzrRhPe8qN1RPJebOr7uwiO00I14TrUklKm+GgumF+aql/ldGnpNTVw5sE0nbaYn+JaoAGXXTP6NXOLf3NLxzJ8ID9GrnFv7ml45k+AAAAAAAAAAAAAAAjzdffq2HvqnwmSGR1uxRvjYFn5xPQ7nmp3/K7aIEKW3lp62WWy5bnw0/aZZbNINlLB4BscV3w/wBr8jW47canrtHmpmxxYfD7TXY7canrtHmpkkc7ZqLqThBaZyUVtdx3+M+M05KjgyzPIslBqm1Ftb/OKSbl1xTTuW3qu4nAklG0U5PRFuXui38jMsVNu0wTz5MpX7Ex4fS0dOkTHm0R8Pq2kW8rO2Z9OOYxVH1jY0o5jWGnNL1empzTMKYQOcVnhZLVRlPfN4c7q7gruBc/WjFvM3kdZ1eSW7RTjOMoTSlGSulF6H1an2natg9PTunEeGxqMcTXpaO30cbjJgr9FtEqcZOdGSVSzVbrlWs8s8JrZ+KZqzqMY6dZWehSnLfKFGMlZZXLKpNyTqU5dj069F15y50ttniMtJpeYmNvZM/o1c4t/c0vHMnwgP0aucW/uaXjmT4HGAAAAAAAAAAAAABHe7BxbB39T4TJEI63YeLYO/qfCYEI298LP2mWC9bnws9ZYNIHkmGykDZYscv9r8jXY6calrr+ambDFl8N9r5Gvxz41LXX8zMkjQWGeTVg/wCZfjmN9ZKd1qv64ye1pX/M5tM6WhV4WjLonFNPskslrY/mWr63DbRvyz4tEtlBZzYUdBg3XMvxqZjl094pM7vV6a8Umd2RKoilswJ185l0Xejmpn552c9NR+ZOzyrZnUpVINPId107r1TrO9U2+pN+q9ZwNeGTJq6656HpXYSTQrxjCvTmnKFahKm0nc1K9Tpy2TjHZecFhpN1ct6ZrKftPjf3ZR1ckbWmHmOPYJrkjJt3Sv6NXOLf3NLxzJ8ID9GrnFv7ml45k+GHnwAAAAAAAAAAAAAI63YuLYO/qfCZIpHO7HxbB39T4TAhC3crPWWGy9b+VnrMc0geAAbDFvlvtfIwcc9NL+v5mZm4uct9r5GFjlppf1/MzJI5k32CKe/WWrFN77Znv0F0ujJqM0tTae00Jm4Hwg7PWhVSykr1Uh0VKUldOD1psQ5cV+S27qaFZVIRmulet2SWn/faeOTRTKzOzzlUh69iqZMt8X0Snycpr9lPOr9F6ktMTIq0xaPL1eDPGanN58/fuxHpNnZVmNe4ZzZWZZjk00et3tJH7iqaONw/G6UNU/izOynpSOSxuio2udJfRertbcv+41mj1buj+IpiMNI9/kk30aucW/uaXjmT4QH6NXOLf3NLxzJ8OB5AAAAAAAAAAAAAACOd2Pi2Dv6nwmSMRxuycWwfWJ/CYEIYQ5WesxjIwhys9ZjmkDxhspbA2OLr4Xb8jCxx00f6/mZmZi9yu35GFjh9D/X8zMkjmwARXTYpYcdKUKU7mk5KmpvgqkKmarZ6qebeqi6+LJJ9bOhw9YI2OpTyHJ2K0RyrJVnffD96z1G9E4PNnz3EcHe4lY9QowdjwjThabHNq9VIKqotaHKLTvuzess6u6bldfZ29NqrYbbwouvZmUNB3zxJwbhChv2Cqm8S0rIqO0WaT6pQynKGzJu6ug4HCeB8K2ObhXsUsm/l4yUrPk9Mt80Ja7mcmG3Jbd6LScVwVne/T/fgtWivGKlKXFir5aulLt6NpwtutUq1WpVnxqk5Tlrk7zPw1hHLupxd6XHkm8mUr283Ys2fpu9+pM3tvL43FNf+qyRy9oTP6NXOLf3NLxzJ8ID9GrnFv7ml45k+GHywAAAAAAAAAAAAAI43ZeJYPrE/hMkcjfdm4lg+sT+EwIPt/Kz1mO2X8IPhZ6zGNINnh6eAbDF98Lt+Rh44fQ/1/MzMvAHK7TExv+h1VvMzJI5sAEUAAF6zWqpSll0qk6cv3oSlCV2tF224TtFe5V69atdo3yrOpd95mIAAAAmf0aucW/uaXjmT4QH6NXOLf3NLxzJ8AAAAAAAAAAAAAABG+7PxLB9Yn8JkkEbbtPEwf9Yn8FgQdhHlZ6zHL+EOVnrMc0geAAZ2AXwu0xsbvoNVbzMzIwFyu0x8bvoNVbzMySObABFAAAAAAAATP6NXOLf3NLxzJ8ID9GrnFv7ml45k+AAAAAAAAAAAAAAAjXdp4mD/AKxP4LJKI13a+TsH1ifwmBB2EOVnrMYyLfyktZjmkD2+48PGwM7Ab4Xb8jGxu0UNVbzMy/gV8L9r5IsY26KGqt5iZJHOAAigAAAAAAAJn9GrnFv7ml45k+EB+jVzi39zS8cyfAAAAAAAAAAAAAAARpu2cnYPrE/hMksjDd0k1RsDX/EzX/RkBCVu5SWsxy7a5N1JXq5lo0jxspPWeAZmBOV+1+Raxt0UNVbzEyrBEmqu0tY1u+NnfZW9+/zINBcusXdp4CK9u7Rd2o8KorpehAeXahdq95djBSUnFXSir7r7049O0sge3DJPABNHo1c4t/c0vHInsgP0aecYQ7ml45E+AAAAAAAAAAAAAAAjrdxsjlg+jXX/AOa1wlPshUjOl4pwJFMXCuD6VpoVbNWjlUq0JQmtDyZK7M+h9KfQwPk3CC4S/oaMc6vHDEu2YOnKNWE6tmTe92yEXKDh0b5dycutPN1NnK3LocXtRpFtgqce1e9FN3avegL2D55NTaUYyK+Mf+XVmn7NS6cX78tbC1fc70170VW2pGrG7LjGd1zvaukk70ntINGDMVgf8Sktcn+Q/V7/AItL7z/ImysMyaNzpVI3espRmuvJSkpeJPYyv9Xv+LS+8/yKoWGSd6q0k105T/IuwpwcorfZSzKNGa1zlHJive79hhmfKxSemrR1ZTSv1XFP6vf8Wj99/kBhAzf1e/4tH77/ACM7A+K1qtlVUrNFVpt6KeVJRXXKV10V2toglT0aLNLKwjWu9TJo00+hyvqSaWpXe9E6HMbnWKccE2CFmTU6sm6loqLROtJJO7sSSitV/SdOAAAAAAAAAAAAAAAAAOKt/KS1gAY4AKM/Bf7Wwx8Ico9n+AAMZgAAZlj4r1gAYYAAHWYvcj9p/IAg2YAAAAAAAAAA/9k=',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating : 5
    },
    {
        id: 2,
        name: 'SamSung galaxy S7',
        image: 'data:image/jpeg;base64,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',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 400,
        inventory: 15,
        rating : 4
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4SYwa8F8tYSUPn1moev_Qzb4wL8fyuT72jhaMh8pnLxf2UE2D&usqp=CAU',
        description: 'Sản phẩm do Tàu Khựa sản xuất',
        price: 300,
        inventory: 10,
        rating : 3
    },
]

const products = (state = initialState,action) => {
    switch(action.type) {
        default:
            return [...state];
    }
}

export default products;