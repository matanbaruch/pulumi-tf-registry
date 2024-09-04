// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Notification extends pulumi.CustomResource {
    /**
     * Get an existing Notification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationState, opts?: pulumi.CustomResourceOptions): Notification {
        return new Notification(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aquasec:index/notification:Notification';

    /**
     * Returns true if the given object is an instance of Notification.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Notification {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Notification.__pulumiType;
    }

    /**
     * The user that created the notification
     */
    public /*out*/ readonly author!: pulumi.Output<string>;
    /**
     * Notification last update time
     */
    public /*out*/ readonly lastUpdated!: pulumi.Output<string>;
    /**
     * Notification name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notification properties, please check the examples for setting it
     */
    public readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * Notification Template
     */
    public /*out*/ readonly template!: pulumi.Output<{[key: string]: string}>;
    /**
     * Notifications types, allowed values: slack\ jira\ email\ teams\ webhook\ splunk\ serviceNow
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Notification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationArgs | NotificationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationState | undefined;
            resourceInputs["author"] = state ? state.author : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as NotificationArgs | undefined;
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["lastUpdated"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Notification.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Notification resources.
 */
export interface NotificationState {
    /**
     * The user that created the notification
     */
    author?: pulumi.Input<string>;
    /**
     * Notification last update time
     */
    lastUpdated?: pulumi.Input<string>;
    /**
     * Notification name
     */
    name?: pulumi.Input<string>;
    /**
     * Notification properties, please check the examples for setting it
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Notification Template
     */
    template?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Notifications types, allowed values: slack\ jira\ email\ teams\ webhook\ splunk\ serviceNow
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Notification resource.
 */
export interface NotificationArgs {
    /**
     * Notification name
     */
    name?: pulumi.Input<string>;
    /**
     * Notification properties, please check the examples for setting it
     */
    properties: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Notifications types, allowed values: slack\ jira\ email\ teams\ webhook\ splunk\ serviceNow
     */
    type: pulumi.Input<string>;
}
