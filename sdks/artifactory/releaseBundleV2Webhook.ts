// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ReleaseBundleV2Webhook extends pulumi.CustomResource {
    /**
     * Get an existing ReleaseBundleV2Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReleaseBundleV2WebhookState, opts?: pulumi.CustomResourceOptions): ReleaseBundleV2Webhook {
        return new ReleaseBundleV2Webhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'artifactory:index/releaseBundleV2Webhook:ReleaseBundleV2Webhook';

    /**
     * Returns true if the given object is an instance of ReleaseBundleV2Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReleaseBundleV2Webhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReleaseBundleV2Webhook.__pulumiType;
    }

    /**
     * Specifies where the webhook will be applied, on which release bundles or distributions.
     */
    public readonly criteria!: pulumi.Output<outputs.ReleaseBundleV2WebhookCriteria>;
    /**
     * Description of webhook. Max length 1000 characters.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Status of webhook. Default to 'true'
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook. Allow
     * values: release_bundle_v2_started, release_bundle_v2_failed, release_bundle_v2_completed
     */
    public readonly eventTypes!: pulumi.Output<string[]>;
    public readonly handlers!: pulumi.Output<outputs.ReleaseBundleV2WebhookHandler[]>;
    /**
     * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
     */
    public readonly key!: pulumi.Output<string>;

    /**
     * Create a ReleaseBundleV2Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReleaseBundleV2WebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReleaseBundleV2WebhookArgs | ReleaseBundleV2WebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReleaseBundleV2WebhookState | undefined;
            resourceInputs["criteria"] = state ? state.criteria : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventTypes"] = state ? state.eventTypes : undefined;
            resourceInputs["handlers"] = state ? state.handlers : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
        } else {
            const args = argsOrState as ReleaseBundleV2WebhookArgs | undefined;
            if ((!args || args.criteria === undefined) && !opts.urn) {
                throw new Error("Missing required property 'criteria'");
            }
            if ((!args || args.eventTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventTypes'");
            }
            if ((!args || args.handlers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'handlers'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["criteria"] = args ? args.criteria : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventTypes"] = args ? args.eventTypes : undefined;
            resourceInputs["handlers"] = args ? args.handlers : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReleaseBundleV2Webhook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReleaseBundleV2Webhook resources.
 */
export interface ReleaseBundleV2WebhookState {
    /**
     * Specifies where the webhook will be applied, on which release bundles or distributions.
     */
    criteria?: pulumi.Input<inputs.ReleaseBundleV2WebhookCriteria>;
    /**
     * Description of webhook. Max length 1000 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of webhook. Default to 'true'
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook. Allow
     * values: release_bundle_v2_started, release_bundle_v2_failed, release_bundle_v2_completed
     */
    eventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    handlers?: pulumi.Input<pulumi.Input<inputs.ReleaseBundleV2WebhookHandler>[]>;
    /**
     * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
     */
    key?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReleaseBundleV2Webhook resource.
 */
export interface ReleaseBundleV2WebhookArgs {
    /**
     * Specifies where the webhook will be applied, on which release bundles or distributions.
     */
    criteria: pulumi.Input<inputs.ReleaseBundleV2WebhookCriteria>;
    /**
     * Description of webhook. Max length 1000 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of webhook. Default to 'true'
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook. Allow
     * values: release_bundle_v2_started, release_bundle_v2_failed, release_bundle_v2_completed
     */
    eventTypes: pulumi.Input<pulumi.Input<string>[]>;
    handlers: pulumi.Input<pulumi.Input<inputs.ReleaseBundleV2WebhookHandler>[]>;
    /**
     * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
     */
    key: pulumi.Input<string>;
}
