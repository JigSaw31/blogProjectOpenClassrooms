export class Post {

constructor(public title: string,
            public content: string,
            public loveIts = 0,
            public created_at = new Date()) {}

}
