import React, { Component ,Fragment} from 'react';
import Header from './common/header/index';//'/index'可以省略
import {GlobalSytle} from './style';
import {IconSytle} from './statics/iconfont/iconfont';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Fragment>
            <Provider store={store}>

                <BrowserRouter>
                    <div>
                        <Header/>
                        {/*exact的意义是“完全匹配路径”，免除了并集的情况*/}
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id/:dede' exact component={Detail}></Route>
                        <Route path='/login' exact component={Login}></Route>
                    </div>
                </BrowserRouter>

                {/**
                 * 全局样式*/}
                <GlobalSytle/>
                <IconSytle/>
            </Provider>
        </Fragment>
    );
  }
}

export default App;
