import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import API from "../../services/APIService";

export class Post extends React.Component {
  state = {
    lengthOfComments: "",
    commentUsers: []
  };

  componentDidMount() {
    this.refreshCommentData();
    var elems = document.querySelectorAll('.tooltipped');
    window.M.Tooltip.init(elems);

  };

  componentDidUpdate = (prevProps) => {

    if (prevProps.postId !== this.props.postId) {
      this.refreshCommentData();
    }

  }

  refreshCommentData = () => {
    API.getCommentsByPostId(this.props.postId).then(res => 
      {
        let userDisplayNames = res.data.map(res => res.userId.displayName);
        if (userDisplayNames && userDisplayNames.length > 10) {
          userDisplayNames = userDisplayNames.splice(0, 10);
        }
        console.log(userDisplayNames);

        this.setState({ 
          lengthOfComments: res.data.length,
          commentUsers: [...new Set(userDisplayNames)]
        });
      });
  }

  render() {
    


    return (
      // <div className='aos-init aos-animate' data-aos={props.isEven ? "fade-right" : 'fade-left'}>
      <div data-aos="flip-up" data-aos-offset="110">
        <div className="postcard card hoverable">
          <div className="row card-image left-align">
            <div className="col s12 m9">
              <h1 className="post-title title">
                <Link
                  className="postTitleLink"
                  to={`/postdetail/${this.props.postId}`}
                >
                  {this.props.title}
                </Link>
              </h1>
              <h5 className="body hide-on-small-only marginBottom">
                {this.props.body}
              </h5>
              <div className="valign-wrapper">
                <div className="postImageContainer">
                  <img className="postImage" src={this.props.userImage} alt="" />
                </div>
                <div className="postPersonContainer">
                  <div className="postAuthor">{this.props.author}</div>
                  <div className="postDate">
                    <Moment calendar>{this.props.date}</Moment>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/postdetail/${this.props.postId}`}>
            <div data-postid={this.props.postId} className="col s12 m3 comment-length right-align hide-on-small-only tooltipped" data-position="top" data-tooltip={this.state.lengthOfComments < 1 ? "no comments" : this.state.commentUsers.join('<br/>') }>{this.state.lengthOfComments === 1 ? `${'1 comment'}` : `${this.state.lengthOfComments} ${'comments'}`}</div>
            <div className="col s12 small-comment left-align hide-on-med-and-up">{this.state.lengthOfComments === 1 ? `${'1 comment'}` : `${this.state.lengthOfComments} ${'comments'}`}</div>
          </Link>
          </div>
        </div>
      </div>
    );
  }
};

