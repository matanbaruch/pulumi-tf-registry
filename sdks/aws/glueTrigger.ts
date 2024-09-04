// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GlueTrigger extends pulumi.CustomResource {
    /**
     * Get an existing GlueTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlueTriggerState, opts?: pulumi.CustomResourceOptions): GlueTrigger {
        return new GlueTrigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/glueTrigger:GlueTrigger';

    /**
     * Returns true if the given object is an instance of GlueTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlueTrigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlueTrigger.__pulumiType;
    }

    public readonly actions!: pulumi.Output<outputs.GlueTriggerAction[]>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly eventBatchingConditions!: pulumi.Output<outputs.GlueTriggerEventBatchingCondition[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly predicate!: pulumi.Output<outputs.GlueTriggerPredicate | undefined>;
    public readonly schedule!: pulumi.Output<string | undefined>;
    public readonly startOnCreation!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.GlueTriggerTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly workflowName!: pulumi.Output<string | undefined>;

    /**
     * Create a GlueTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlueTriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlueTriggerArgs | GlueTriggerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlueTriggerState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventBatchingConditions"] = state ? state.eventBatchingConditions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["predicate"] = state ? state.predicate : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["startOnCreation"] = state ? state.startOnCreation : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["workflowName"] = state ? state.workflowName : undefined;
        } else {
            const args = argsOrState as GlueTriggerArgs | undefined;
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventBatchingConditions"] = args ? args.eventBatchingConditions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["predicate"] = args ? args.predicate : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["startOnCreation"] = args ? args.startOnCreation : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["workflowName"] = args ? args.workflowName : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GlueTrigger.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GlueTrigger resources.
 */
export interface GlueTriggerState {
    actions?: pulumi.Input<pulumi.Input<inputs.GlueTriggerAction>[]>;
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    eventBatchingConditions?: pulumi.Input<pulumi.Input<inputs.GlueTriggerEventBatchingCondition>[]>;
    name?: pulumi.Input<string>;
    predicate?: pulumi.Input<inputs.GlueTriggerPredicate>;
    schedule?: pulumi.Input<string>;
    startOnCreation?: pulumi.Input<boolean>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GlueTriggerTimeouts>;
    type?: pulumi.Input<string>;
    workflowName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GlueTrigger resource.
 */
export interface GlueTriggerArgs {
    actions: pulumi.Input<pulumi.Input<inputs.GlueTriggerAction>[]>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    eventBatchingConditions?: pulumi.Input<pulumi.Input<inputs.GlueTriggerEventBatchingCondition>[]>;
    name?: pulumi.Input<string>;
    predicate?: pulumi.Input<inputs.GlueTriggerPredicate>;
    schedule?: pulumi.Input<string>;
    startOnCreation?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GlueTriggerTimeouts>;
    type: pulumi.Input<string>;
    workflowName?: pulumi.Input<string>;
}
