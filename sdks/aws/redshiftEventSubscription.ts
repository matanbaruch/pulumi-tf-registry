// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RedshiftEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing RedshiftEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RedshiftEventSubscriptionState, opts?: pulumi.CustomResourceOptions): RedshiftEventSubscription {
        return new RedshiftEventSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/redshiftEventSubscription:RedshiftEventSubscription';

    /**
     * Returns true if the given object is an instance of RedshiftEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RedshiftEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RedshiftEventSubscription.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly customerAwsId!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly eventCategories!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly severity!: pulumi.Output<string | undefined>;
    public readonly snsTopicArn!: pulumi.Output<string>;
    public readonly sourceIds!: pulumi.Output<string[] | undefined>;
    public readonly sourceType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.RedshiftEventSubscriptionTimeouts | undefined>;

    /**
     * Create a RedshiftEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedshiftEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RedshiftEventSubscriptionArgs | RedshiftEventSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RedshiftEventSubscriptionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["customerAwsId"] = state ? state.customerAwsId : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventCategories"] = state ? state.eventCategories : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["snsTopicArn"] = state ? state.snsTopicArn : undefined;
            resourceInputs["sourceIds"] = state ? state.sourceIds : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RedshiftEventSubscriptionArgs | undefined;
            if ((!args || args.snsTopicArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snsTopicArn'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventCategories"] = args ? args.eventCategories : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["snsTopicArn"] = args ? args.snsTopicArn : undefined;
            resourceInputs["sourceIds"] = args ? args.sourceIds : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["customerAwsId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RedshiftEventSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RedshiftEventSubscription resources.
 */
export interface RedshiftEventSubscriptionState {
    arn?: pulumi.Input<string>;
    customerAwsId?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    eventCategories?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    snsTopicArn?: pulumi.Input<string>;
    sourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    sourceType?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RedshiftEventSubscriptionTimeouts>;
}

/**
 * The set of arguments for constructing a RedshiftEventSubscription resource.
 */
export interface RedshiftEventSubscriptionArgs {
    enabled?: pulumi.Input<boolean>;
    eventCategories?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    snsTopicArn: pulumi.Input<string>;
    sourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    sourceType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RedshiftEventSubscriptionTimeouts>;
}
