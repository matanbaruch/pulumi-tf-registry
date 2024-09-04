// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NotificationSettingsEmail extends pulumi.CustomResource {
    /**
     * Get an existing NotificationSettingsEmail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationSettingsEmailState, opts?: pulumi.CustomResourceOptions): NotificationSettingsEmail {
        return new NotificationSettingsEmail(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/notificationSettingsEmail:NotificationSettingsEmail';

    /**
     * Returns true if the given object is an instance of NotificationSettingsEmail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationSettingsEmail {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationSettingsEmail.__pulumiType;
    }

    /**
     * The ID of the environment to configure email settings in. Must be a valid PingOne resource ID. This field is immutable
     * and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A required single block that specifies the email sender's "from" name and email address.
     */
    public readonly from!: pulumi.Output<outputs.NotificationSettingsEmailFrom>;
    /**
     * A string that specifies the organization's SMTP server.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * A string that specifies the organization's SMTP server's password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * An integer that specifies the port used by the organization's SMTP server to send emails (default: `465`). Note that the
     * protocol used depends upon the port specified. If you specify port `25`, `587`, or `2525`, SMTP with `STARTTLS` is used.
     * Otherwise, `SMTPS` is used.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * A string that specifies the current protocol in use.
     */
    public /*out*/ readonly protocol!: pulumi.Output<string>;
    /**
     * A single block that specifies the email sender's "reply to" name and email address.
     */
    public readonly replyTo!: pulumi.Output<outputs.NotificationSettingsEmailReplyTo | undefined>;
    /**
     * A string that specifies the organization's SMTP server's username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a NotificationSettingsEmail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationSettingsEmailArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationSettingsEmailArgs | NotificationSettingsEmailState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationSettingsEmailState | undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["from"] = state ? state.from : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["replyTo"] = state ? state.replyTo : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as NotificationSettingsEmailArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.from === undefined) && !opts.urn) {
                throw new Error("Missing required property 'from'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["from"] = args ? args.from : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["replyTo"] = args ? args.replyTo : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["protocol"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationSettingsEmail.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NotificationSettingsEmail resources.
 */
export interface NotificationSettingsEmailState {
    /**
     * The ID of the environment to configure email settings in. Must be a valid PingOne resource ID. This field is immutable
     * and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A required single block that specifies the email sender's "from" name and email address.
     */
    from?: pulumi.Input<inputs.NotificationSettingsEmailFrom>;
    /**
     * A string that specifies the organization's SMTP server.
     */
    host?: pulumi.Input<string>;
    /**
     * A string that specifies the organization's SMTP server's password.
     */
    password?: pulumi.Input<string>;
    /**
     * An integer that specifies the port used by the organization's SMTP server to send emails (default: `465`). Note that the
     * protocol used depends upon the port specified. If you specify port `25`, `587`, or `2525`, SMTP with `STARTTLS` is used.
     * Otherwise, `SMTPS` is used.
     */
    port?: pulumi.Input<number>;
    /**
     * A string that specifies the current protocol in use.
     */
    protocol?: pulumi.Input<string>;
    /**
     * A single block that specifies the email sender's "reply to" name and email address.
     */
    replyTo?: pulumi.Input<inputs.NotificationSettingsEmailReplyTo>;
    /**
     * A string that specifies the organization's SMTP server's username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationSettingsEmail resource.
 */
export interface NotificationSettingsEmailArgs {
    /**
     * The ID of the environment to configure email settings in. Must be a valid PingOne resource ID. This field is immutable
     * and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A required single block that specifies the email sender's "from" name and email address.
     */
    from: pulumi.Input<inputs.NotificationSettingsEmailFrom>;
    /**
     * A string that specifies the organization's SMTP server.
     */
    host: pulumi.Input<string>;
    /**
     * A string that specifies the organization's SMTP server's password.
     */
    password: pulumi.Input<string>;
    /**
     * An integer that specifies the port used by the organization's SMTP server to send emails (default: `465`). Note that the
     * protocol used depends upon the port specified. If you specify port `25`, `587`, or `2525`, SMTP with `STARTTLS` is used.
     * Otherwise, `SMTPS` is used.
     */
    port: pulumi.Input<number>;
    /**
     * A single block that specifies the email sender's "reply to" name and email address.
     */
    replyTo?: pulumi.Input<inputs.NotificationSettingsEmailReplyTo>;
    /**
     * A string that specifies the organization's SMTP server's username.
     */
    username: pulumi.Input<string>;
}
