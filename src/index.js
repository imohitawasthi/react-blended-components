import React from 'react'
import styles from './styles.module.css'

import Validator from './Blended/Validator'

import Button from './Containers/ButtonComponent'
import Card from './Containers/CardComponent'
import Dialog from './Containers/DialogComponent'
import Loader from './Containers/LoaderComponent'
import Avatar from './Containers/AvatarComponent'
import Pagination from './Containers/PaginationComponent'
import Tab from './Containers/TabComponent'
import Table from './Containers/TableComponent'
import Badge from './Containers/BadgeComponent'
import Steps from './Containers/StepsComponent'
import Toast from './Containers/ToastComponent'

import Form, { Text, Password, TextArea, Radio, CheckBox, Select, DatePicker, Switch } from './Containers/FormComponent'

const FormElements = { Text, Password, TextArea, Radio, CheckBox, Select, DatePicker, Switch }

export {
  Validator,
  
  Button,
  Card,
  Dialog, 
  Loader,
  Avatar,
  Pagination,
  Tab,
  Table,
  Badge,
  Steps,  

  Form,
  FormElements
}
