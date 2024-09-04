// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookState, opts?: pulumi.CustomResourceOptions): Webhook {
        return new Webhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fivetran:index/webhook:Webhook';

    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webhook.__pulumiType;
    }

    /**
     * Boolean, if set to true, webhooks are immediately sent in response to events
     */
    public readonly active!: pulumi.Output<boolean>;
    /**
     * The webhook creation timestamp
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The ID of the user who created the webhook.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * The array of event types
     */
    public readonly events!: pulumi.Output<string[]>;
    /**
     * The group ID
     */
    public readonly groupId!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether the setup tests should be run
     */
    public readonly runTests!: pulumi.Output<boolean | undefined>;
    /**
     * The secret string used for payload signing and masked in the response.
     */
    public readonly secret!: pulumi.Output<string>;
    /**
     * The webhook type (group, account)
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Your webhooks URL endpoint for your application
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebhookArgs | WebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebhookState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["runTests"] = state ? state.runTests : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as WebhookArgs | undefined;
            if ((!args || args.active === undefined) && !opts.urn) {
                throw new Error("Missing required property 'active'");
            }
            if ((!args || args.events === undefined) && !opts.urn) {
                throw new Error("Missing required property 'events'");
            }
            if ((!args || args.secret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secret'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["runTests"] = args ? args.runTests : undefined;
            resourceInputs["secret"] = args?.secret ? pulumi.secret(args.secret) : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Webhook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Webhook resources.
 */
export interface WebhookState {
    /**
     * Boolean, if set to true, webhooks are immediately sent in response to events
     */
    active?: pulumi.Input<boolean>;
    /**
     * The webhook creation timestamp
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The ID of the user who created the webhook.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The array of event types
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The group ID
     */
    groupId?: pulumi.Input<string>;
    /**
     * Specifies whether the setup tests should be run
     */
    runTests?: pulumi.Input<boolean>;
    /**
     * The secret string used for payload signing and masked in the response.
     */
    secret?: pulumi.Input<string>;
    /**
     * The webhook type (group, account)
     */
    type?: pulumi.Input<string>;
    /**
     * Your webhooks URL endpoint for your application
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * Boolean, if set to true, webhooks are immediately sent in response to events
     */
    active: pulumi.Input<boolean>;
    /**
     * The array of event types
     */
    events: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The group ID
     */
    groupId?: pulumi.Input<string>;
    /**
     * Specifies whether the setup tests should be run
     */
    runTests?: pulumi.Input<boolean>;
    /**
     * The secret string used for payload signing and masked in the response.
     */
    secret: pulumi.Input<string>;
    /**
     * The webhook type (group, account)
     */
    type: pulumi.Input<string>;
    /**
     * Your webhooks URL endpoint for your application
     */
    url: pulumi.Input<string>;
}
