// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebhookDestination extends pulumi.CustomResource {
    /**
     * Get an existing WebhookDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookDestinationState, opts?: pulumi.CustomResourceOptions): WebhookDestination {
        return new WebhookDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lightstep:index/webhookDestination:WebhookDestination';

    /**
     * Returns true if the given object is an instance of WebhookDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebhookDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebhookDestination.__pulumiType;
    }

    /**
     * Custom HTTP headers for the webhook request
     */
    public readonly customHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of the webhook destination
     */
    public readonly destinationName!: pulumi.Output<string>;
    public readonly projectName!: pulumi.Output<string>;
    /**
     * Webhook payload body text template. Used for customing webhook messages
     */
    public readonly template!: pulumi.Output<string | undefined>;
    /**
     * Webhook URL
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a WebhookDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebhookDestinationArgs | WebhookDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebhookDestinationState | undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["destinationName"] = state ? state.destinationName : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as WebhookDestinationArgs | undefined;
            if ((!args || args.destinationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["destinationName"] = args ? args.destinationName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebhookDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebhookDestination resources.
 */
export interface WebhookDestinationState {
    /**
     * Custom HTTP headers for the webhook request
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the webhook destination
     */
    destinationName?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
    /**
     * Webhook payload body text template. Used for customing webhook messages
     */
    template?: pulumi.Input<string>;
    /**
     * Webhook URL
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebhookDestination resource.
 */
export interface WebhookDestinationArgs {
    /**
     * Custom HTTP headers for the webhook request
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the webhook destination
     */
    destinationName: pulumi.Input<string>;
    projectName: pulumi.Input<string>;
    /**
     * Webhook payload body text template. Used for customing webhook messages
     */
    template?: pulumi.Input<string>;
    /**
     * Webhook URL
     */
    url: pulumi.Input<string>;
}
