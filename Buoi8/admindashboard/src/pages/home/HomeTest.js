import { useState } from "react";
import DemoClassComponent from "../../_sharecomponents/DemoClassComponent";
import WithColor from "../../_sharecomponents/HOCComponent/WithColor";
import OnMouseHover from "../../_sharecomponents/renderprops/OnMouseHover";
import Counter from "../../_sharecomponents/renderprops/Counter";

const Title = (props) => {
    return (
        <div>
            <h1>Random Color</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.number}</h3>
        </div>
    )
}

const Article = (props) => {
    return (
        <div>
            <h1>Article</h1>
            <h2>{props.articleTitle}</h2>
        </div>
    )
}

const TitleWithRandomColor = WithColor(Title);
const ArticleWithRandomColor = WithColor(Article);

const HomeTest = (props) => {
    const [user, setUser] = useState({
        username: 'Nguyen Van A',
        password: '123abc'
    })

    const _onClick = () => {
        //setUser({...user, username: 'Tran Van B'})
        setFlagShowDemoComponent(!flagShowDemoComponent)
    }

    const [flagShowDemoComponent, setFlagShowDemoComponent] = useState(true)


    console.log('Home component rendered...')
    return (
        <div className="signup-container">
            <h1>Header &nbsp;&#10100;&nbsp;height:&nbsp;110px;&nbsp;&#10101;</h1>
            {/* {   
                flagShowDemoComponent &&
                
            } */}

            <DemoClassComponent user={user}/>
            <button
                style={{cursor: 'pointer'}}
                onClick={_onClick}
            >
                Click me to change user
            </button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <TitleWithRandomColor subTitle="123abc"/>
            <ArticleWithRandomColor />
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <div style={{height: '200px',backgroundColor: 'lightblue', border: '1px solid red'}}>
                <h1>Render props:</h1>
                <OnMouseHover 
                    render={({x, y}) => {
                        return(
                            <div>
                                <h1>The mouse position is: {x} ;{y}</h1>
                            </div>
                        )
                    }}
                />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <Counter 
                render={dataObject => {
                    const { count, increment, decrement } = dataObject
                    return (
                        <div>
                            <p>Count current: {count}</p>
                            <button onClick={increment}>Increment</button>
                            <button onClick={decrement}>Decrement</button>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default HomeTest