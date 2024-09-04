// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlertHandler extends pulumi.CustomResource {
    /**
     * Get an existing AlertHandler resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertHandlerState, opts?: pulumi.CustomResourceOptions): AlertHandler {
        return new AlertHandler(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/alertHandler:AlertHandler';

    /**
     * Returns true if the given object is an instance of AlertHandler.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertHandler {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertHandler.__pulumiType;
    }

    /**
     * When the `type` attribute is set to: - One of [`output`, `groovy-scripted`, `custom`, `error-log`, `third-party`]:
     * Indicates whether the server should attempt to invoke this Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `smtp`: Indicates whether the server
     * should attempt to invoke this SMTP Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated. - `jmx`: Indicates whether the server should attempt to invoke this JMX
     * Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network
     * communication to deliver the alert notification) will not delay whatever processing the server was performing when the
     * alert was generated. - `snmp`: Indicates whether the server should attempt to invoke this SNMP Alert Handler in a
     * background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the
     * alert notification) will not delay whatever processing the server was performing when the alert was generated. -
     * `twilio`: Indicates whether the server should attempt to invoke this Twilio Alert Handler in a background thread so that
     * any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `snmp-sub-agent`: Indicates whether
     * the server should attempt to invoke this SNMP Sub Agent Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `exec`: Indicates whether the server
     * should attempt to invoke this Exec Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated.
     */
    public readonly asynchronous!: pulumi.Output<boolean>;
    /**
     * Specifies the path of the command to execute, without any arguments. It must be an absolute path for reasons of security
     * and reliability.
     */
    public readonly command!: pulumi.Output<string | undefined>;
    /**
     * Supported in PingDirectory product version 10.1.0.0+. The maximum length of time this server will wait for the executed
     * command to finish executing before forcibly terminating it.
     */
    public readonly commandTimeout!: pulumi.Output<string>;
    /**
     * Specifies the name of the community to which the traps will be sent.
     */
    public readonly communityName!: pulumi.Output<string>;
    /**
     * A description for this Alert Handler
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies the names of the alert types that are disabled for this alert handler.
     */
    public readonly disabledAlertTypes!: pulumi.Output<string[]>;
    /**
     * Indicates whether the Alert Handler is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Specifies the alert severities for which this alert handler should be used. If no values are provided, then this alert
     * handler will be enabled for alerts with any severity.
     */
    public readonly enabledAlertSeverities!: pulumi.Output<string[]>;
    /**
     * Specifies the names of the alert types that are enabled for this alert handler.
     */
    public readonly enabledAlertTypes!: pulumi.Output<string[]>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Alert Handler. Each configuration property
     * should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Alert Handler.
     */
    public readonly extensionClass!: pulumi.Output<string | undefined>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Twilio service.
     */
    public readonly httpProxyExternalServer!: pulumi.Output<string | undefined>;
    /**
     * Include monitor entries that match this filter.
     */
    public readonly includeMonitorDataFilter!: pulumi.Output<string | undefined>;
    /**
     * The behavior to use for alert messages that are longer than the 160-character size limit for SMS messages.
     */
    public readonly longMessageBehavior!: pulumi.Output<string>;
    /**
     * Specifies the body that should be used for email messages generated by this alert handler.
     */
    public readonly messageBody!: pulumi.Output<string>;
    /**
     * Specifies the subject that should be used for email messages generated by this alert handler.
     */
    public readonly messageSubject!: pulumi.Output<string>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies an email address to which the messages should be sent.
     */
    public readonly recipientAddresses!: pulumi.Output<string[]>;
    /**
     * The phone number to which alert notifications should be delivered.
     */
    public readonly recipientPhoneNumbers!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.AlertHandlerRequiredAction[]>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Alert Handler. Each configuration property should
     * be given in the form 'name=value'.
     */
    public readonly scriptArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Alert Handler.
     */
    public readonly scriptClass!: pulumi.Output<string | undefined>;
    /**
     * Specifies the email address to use as the sender for messages generated by this alert handler.
     */
    public readonly senderAddress!: pulumi.Output<string | undefined>;
    /**
     * The outgoing phone number to use for the messages. Values must be phone numbers you have obtained for use with your
     * Twilio account.
     */
    public readonly senderPhoneNumbers!: pulumi.Output<string[]>;
    /**
     * Specifies the address of the SNMP agent to which traps will be sent.
     */
    public readonly serverHostName!: pulumi.Output<string | undefined>;
    /**
     * Specifies the port number of the SNMP agent to which traps will be sent.
     */
    public readonly serverPort!: pulumi.Output<number>;
    /**
     * The unique identifier assigned to the Twilio account that will be used.
     */
    public readonly twilioAccountSid!: pulumi.Output<string | undefined>;
    /**
     * The auth token for the Twilio account that will be used.
     */
    public readonly twilioAuthToken!: pulumi.Output<string | undefined>;
    /**
     * The passphrase provider that may be used to obtain the auth token for the Twilio account that will be used.
     */
    public readonly twilioAuthTokenPassphraseProvider!: pulumi.Output<string | undefined>;
    /**
     * The type of Alert Handler resource. Options are ['output', 'smtp', 'jmx', 'groovy-scripted', 'custom', 'snmp', 'twilio',
     * 'error-log', 'snmp-sub-agent', 'exec', 'third-party']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertHandler resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertHandlerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertHandlerArgs | AlertHandlerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertHandlerState | undefined;
            resourceInputs["asynchronous"] = state ? state.asynchronous : undefined;
            resourceInputs["command"] = state ? state.command : undefined;
            resourceInputs["commandTimeout"] = state ? state.commandTimeout : undefined;
            resourceInputs["communityName"] = state ? state.communityName : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabledAlertTypes"] = state ? state.disabledAlertTypes : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["enabledAlertSeverities"] = state ? state.enabledAlertSeverities : undefined;
            resourceInputs["enabledAlertTypes"] = state ? state.enabledAlertTypes : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["httpProxyExternalServer"] = state ? state.httpProxyExternalServer : undefined;
            resourceInputs["includeMonitorDataFilter"] = state ? state.includeMonitorDataFilter : undefined;
            resourceInputs["longMessageBehavior"] = state ? state.longMessageBehavior : undefined;
            resourceInputs["messageBody"] = state ? state.messageBody : undefined;
            resourceInputs["messageSubject"] = state ? state.messageSubject : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["recipientAddresses"] = state ? state.recipientAddresses : undefined;
            resourceInputs["recipientPhoneNumbers"] = state ? state.recipientPhoneNumbers : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["scriptArguments"] = state ? state.scriptArguments : undefined;
            resourceInputs["scriptClass"] = state ? state.scriptClass : undefined;
            resourceInputs["senderAddress"] = state ? state.senderAddress : undefined;
            resourceInputs["senderPhoneNumbers"] = state ? state.senderPhoneNumbers : undefined;
            resourceInputs["serverHostName"] = state ? state.serverHostName : undefined;
            resourceInputs["serverPort"] = state ? state.serverPort : undefined;
            resourceInputs["twilioAccountSid"] = state ? state.twilioAccountSid : undefined;
            resourceInputs["twilioAuthToken"] = state ? state.twilioAuthToken : undefined;
            resourceInputs["twilioAuthTokenPassphraseProvider"] = state ? state.twilioAuthTokenPassphraseProvider : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AlertHandlerArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["asynchronous"] = args ? args.asynchronous : undefined;
            resourceInputs["command"] = args ? args.command : undefined;
            resourceInputs["commandTimeout"] = args ? args.commandTimeout : undefined;
            resourceInputs["communityName"] = args ? args.communityName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabledAlertTypes"] = args ? args.disabledAlertTypes : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["enabledAlertSeverities"] = args ? args.enabledAlertSeverities : undefined;
            resourceInputs["enabledAlertTypes"] = args ? args.enabledAlertTypes : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["httpProxyExternalServer"] = args ? args.httpProxyExternalServer : undefined;
            resourceInputs["includeMonitorDataFilter"] = args ? args.includeMonitorDataFilter : undefined;
            resourceInputs["longMessageBehavior"] = args ? args.longMessageBehavior : undefined;
            resourceInputs["messageBody"] = args ? args.messageBody : undefined;
            resourceInputs["messageSubject"] = args ? args.messageSubject : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recipientAddresses"] = args ? args.recipientAddresses : undefined;
            resourceInputs["recipientPhoneNumbers"] = args ? args.recipientPhoneNumbers : undefined;
            resourceInputs["scriptArguments"] = args ? args.scriptArguments : undefined;
            resourceInputs["scriptClass"] = args ? args.scriptClass : undefined;
            resourceInputs["senderAddress"] = args ? args.senderAddress : undefined;
            resourceInputs["senderPhoneNumbers"] = args ? args.senderPhoneNumbers : undefined;
            resourceInputs["serverHostName"] = args ? args.serverHostName : undefined;
            resourceInputs["serverPort"] = args ? args.serverPort : undefined;
            resourceInputs["twilioAccountSid"] = args ? args.twilioAccountSid : undefined;
            resourceInputs["twilioAuthToken"] = args?.twilioAuthToken ? pulumi.secret(args.twilioAuthToken) : undefined;
            resourceInputs["twilioAuthTokenPassphraseProvider"] = args ? args.twilioAuthTokenPassphraseProvider : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["twilioAuthToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AlertHandler.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertHandler resources.
 */
export interface AlertHandlerState {
    /**
     * When the `type` attribute is set to: - One of [`output`, `groovy-scripted`, `custom`, `error-log`, `third-party`]:
     * Indicates whether the server should attempt to invoke this Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `smtp`: Indicates whether the server
     * should attempt to invoke this SMTP Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated. - `jmx`: Indicates whether the server should attempt to invoke this JMX
     * Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network
     * communication to deliver the alert notification) will not delay whatever processing the server was performing when the
     * alert was generated. - `snmp`: Indicates whether the server should attempt to invoke this SNMP Alert Handler in a
     * background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the
     * alert notification) will not delay whatever processing the server was performing when the alert was generated. -
     * `twilio`: Indicates whether the server should attempt to invoke this Twilio Alert Handler in a background thread so that
     * any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `snmp-sub-agent`: Indicates whether
     * the server should attempt to invoke this SNMP Sub Agent Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `exec`: Indicates whether the server
     * should attempt to invoke this Exec Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated.
     */
    asynchronous?: pulumi.Input<boolean>;
    /**
     * Specifies the path of the command to execute, without any arguments. It must be an absolute path for reasons of security
     * and reliability.
     */
    command?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 10.1.0.0+. The maximum length of time this server will wait for the executed
     * command to finish executing before forcibly terminating it.
     */
    commandTimeout?: pulumi.Input<string>;
    /**
     * Specifies the name of the community to which the traps will be sent.
     */
    communityName?: pulumi.Input<string>;
    /**
     * A description for this Alert Handler
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the names of the alert types that are disabled for this alert handler.
     */
    disabledAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether the Alert Handler is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the alert severities for which this alert handler should be used. If no values are provided, then this alert
     * handler will be enabled for alerts with any severity.
     */
    enabledAlertSeverities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the names of the alert types that are enabled for this alert handler.
     */
    enabledAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Alert Handler. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Alert Handler.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Twilio service.
     */
    httpProxyExternalServer?: pulumi.Input<string>;
    /**
     * Include monitor entries that match this filter.
     */
    includeMonitorDataFilter?: pulumi.Input<string>;
    /**
     * The behavior to use for alert messages that are longer than the 160-character size limit for SMS messages.
     */
    longMessageBehavior?: pulumi.Input<string>;
    /**
     * Specifies the body that should be used for email messages generated by this alert handler.
     */
    messageBody?: pulumi.Input<string>;
    /**
     * Specifies the subject that should be used for email messages generated by this alert handler.
     */
    messageSubject?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies an email address to which the messages should be sent.
     */
    recipientAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The phone number to which alert notifications should be delivered.
     */
    recipientPhoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.AlertHandlerRequiredAction>[]>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Alert Handler. Each configuration property should
     * be given in the form 'name=value'.
     */
    scriptArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Alert Handler.
     */
    scriptClass?: pulumi.Input<string>;
    /**
     * Specifies the email address to use as the sender for messages generated by this alert handler.
     */
    senderAddress?: pulumi.Input<string>;
    /**
     * The outgoing phone number to use for the messages. Values must be phone numbers you have obtained for use with your
     * Twilio account.
     */
    senderPhoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the address of the SNMP agent to which traps will be sent.
     */
    serverHostName?: pulumi.Input<string>;
    /**
     * Specifies the port number of the SNMP agent to which traps will be sent.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * The unique identifier assigned to the Twilio account that will be used.
     */
    twilioAccountSid?: pulumi.Input<string>;
    /**
     * The auth token for the Twilio account that will be used.
     */
    twilioAuthToken?: pulumi.Input<string>;
    /**
     * The passphrase provider that may be used to obtain the auth token for the Twilio account that will be used.
     */
    twilioAuthTokenPassphraseProvider?: pulumi.Input<string>;
    /**
     * The type of Alert Handler resource. Options are ['output', 'smtp', 'jmx', 'groovy-scripted', 'custom', 'snmp', 'twilio',
     * 'error-log', 'snmp-sub-agent', 'exec', 'third-party']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlertHandler resource.
 */
export interface AlertHandlerArgs {
    /**
     * When the `type` attribute is set to: - One of [`output`, `groovy-scripted`, `custom`, `error-log`, `third-party`]:
     * Indicates whether the server should attempt to invoke this Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `smtp`: Indicates whether the server
     * should attempt to invoke this SMTP Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated. - `jmx`: Indicates whether the server should attempt to invoke this JMX
     * Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network
     * communication to deliver the alert notification) will not delay whatever processing the server was performing when the
     * alert was generated. - `snmp`: Indicates whether the server should attempt to invoke this SNMP Alert Handler in a
     * background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the
     * alert notification) will not delay whatever processing the server was performing when the alert was generated. -
     * `twilio`: Indicates whether the server should attempt to invoke this Twilio Alert Handler in a background thread so that
     * any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `snmp-sub-agent`: Indicates whether
     * the server should attempt to invoke this SNMP Sub Agent Alert Handler in a background thread so that any
     * potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not
     * delay whatever processing the server was performing when the alert was generated. - `exec`: Indicates whether the server
     * should attempt to invoke this Exec Alert Handler in a background thread so that any potentially-expensive processing
     * (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server
     * was performing when the alert was generated.
     */
    asynchronous?: pulumi.Input<boolean>;
    /**
     * Specifies the path of the command to execute, without any arguments. It must be an absolute path for reasons of security
     * and reliability.
     */
    command?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 10.1.0.0+. The maximum length of time this server will wait for the executed
     * command to finish executing before forcibly terminating it.
     */
    commandTimeout?: pulumi.Input<string>;
    /**
     * Specifies the name of the community to which the traps will be sent.
     */
    communityName?: pulumi.Input<string>;
    /**
     * A description for this Alert Handler
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the names of the alert types that are disabled for this alert handler.
     */
    disabledAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether the Alert Handler is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Specifies the alert severities for which this alert handler should be used. If no values are provided, then this alert
     * handler will be enabled for alerts with any severity.
     */
    enabledAlertSeverities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the names of the alert types that are enabled for this alert handler.
     */
    enabledAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Alert Handler. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Alert Handler.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Twilio service.
     */
    httpProxyExternalServer?: pulumi.Input<string>;
    /**
     * Include monitor entries that match this filter.
     */
    includeMonitorDataFilter?: pulumi.Input<string>;
    /**
     * The behavior to use for alert messages that are longer than the 160-character size limit for SMS messages.
     */
    longMessageBehavior?: pulumi.Input<string>;
    /**
     * Specifies the body that should be used for email messages generated by this alert handler.
     */
    messageBody?: pulumi.Input<string>;
    /**
     * Specifies the subject that should be used for email messages generated by this alert handler.
     */
    messageSubject?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies an email address to which the messages should be sent.
     */
    recipientAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The phone number to which alert notifications should be delivered.
     */
    recipientPhoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Alert Handler. Each configuration property should
     * be given in the form 'name=value'.
     */
    scriptArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Alert Handler.
     */
    scriptClass?: pulumi.Input<string>;
    /**
     * Specifies the email address to use as the sender for messages generated by this alert handler.
     */
    senderAddress?: pulumi.Input<string>;
    /**
     * The outgoing phone number to use for the messages. Values must be phone numbers you have obtained for use with your
     * Twilio account.
     */
    senderPhoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the address of the SNMP agent to which traps will be sent.
     */
    serverHostName?: pulumi.Input<string>;
    /**
     * Specifies the port number of the SNMP agent to which traps will be sent.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * The unique identifier assigned to the Twilio account that will be used.
     */
    twilioAccountSid?: pulumi.Input<string>;
    /**
     * The auth token for the Twilio account that will be used.
     */
    twilioAuthToken?: pulumi.Input<string>;
    /**
     * The passphrase provider that may be used to obtain the auth token for the Twilio account that will be used.
     */
    twilioAuthTokenPassphraseProvider?: pulumi.Input<string>;
    /**
     * The type of Alert Handler resource. Options are ['output', 'smtp', 'jmx', 'groovy-scripted', 'custom', 'snmp', 'twilio',
     * 'error-log', 'snmp-sub-agent', 'exec', 'third-party']
     */
    type: pulumi.Input<string>;
}
