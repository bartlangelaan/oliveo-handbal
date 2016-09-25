import React from 'react';
import MediumApi from '../../apis/MediumApi';

const ParagraphTypes = {
    Heading1: 3,
    Heading2: 13,
    Normal: 1,
    Quote1: 6,
    Quote2: 7
};

const MarkupTypes = {
    Strong: 1,
    Italic: 2,
    Link: 3
};

const LayoutTypes = {
    TextWidth: 1,
    Bigger: 3,
    FullWidth: 5,
    Inline: 4
}

class Paragraph extends React.Component {
    render() {
        console.log(this.props);
        return (<p>{this.props.paragraph.type} ({this.props.paragraph.layout}) {this.props.paragraph.text}</p>);
    }
}

export default class BlogPost extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            post: props.post,
        };
    }

    render() {
        if(!this.state.post){
            return (<article></article>);
        }

        let content = this.state.post.content || this.state.post.previewContent;
        let paragraphs = content.bodyModel.paragraphs
                .map(paragraph =>
                    <Paragraph key={paragraph.name} paragraph={paragraph}/>
                );

        return (
            <article>
                <h2>{this.state.post ? this.state.post.title : 'Loading..'}</h2>
                {paragraphs}
            </article>
        );
    }

    componentDidMount() {
        if(this.props && this.props.params && this.props.params.slug){
            MediumApi.getCollection('/oliveohandbal/' + this.props.params.slug).then(json => {
                this.setState({
                    post: json.payload.value
                });
            });
        }
    }
}