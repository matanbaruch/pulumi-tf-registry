// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SagemakerModelPackageGroup extends pulumi.CustomResource {
    /**
     * Get an existing SagemakerModelPackageGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagemakerModelPackageGroupState, opts?: pulumi.CustomResourceOptions): SagemakerModelPackageGroup {
        return new SagemakerModelPackageGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/sagemakerModelPackageGroup:SagemakerModelPackageGroup';

    /**
     * Returns true if the given object is an instance of SagemakerModelPackageGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagemakerModelPackageGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagemakerModelPackageGroup.__pulumiType;
    }

    /**
     * The time at which the model package group was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the model package group.
     */
    public /*out*/ readonly modelPackageGroupArn!: pulumi.Output<string>;
    /**
     * The description of the model package group.
     */
    public readonly modelPackageGroupDescription!: pulumi.Output<string>;
    /**
     * The name of the model package group.
     */
    public readonly modelPackageGroupName!: pulumi.Output<string>;
    public readonly modelPackageGroupPolicy!: pulumi.Output<string>;
    /**
     * The status of a modelpackage group job.
     */
    public /*out*/ readonly modelPackageGroupStatus!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.SagemakerModelPackageGroupTag[]>;

    /**
     * Create a SagemakerModelPackageGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagemakerModelPackageGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagemakerModelPackageGroupArgs | SagemakerModelPackageGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagemakerModelPackageGroupState | undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["modelPackageGroupArn"] = state ? state.modelPackageGroupArn : undefined;
            resourceInputs["modelPackageGroupDescription"] = state ? state.modelPackageGroupDescription : undefined;
            resourceInputs["modelPackageGroupName"] = state ? state.modelPackageGroupName : undefined;
            resourceInputs["modelPackageGroupPolicy"] = state ? state.modelPackageGroupPolicy : undefined;
            resourceInputs["modelPackageGroupStatus"] = state ? state.modelPackageGroupStatus : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SagemakerModelPackageGroupArgs | undefined;
            if ((!args || args.modelPackageGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modelPackageGroupName'");
            }
            resourceInputs["modelPackageGroupDescription"] = args ? args.modelPackageGroupDescription : undefined;
            resourceInputs["modelPackageGroupName"] = args ? args.modelPackageGroupName : undefined;
            resourceInputs["modelPackageGroupPolicy"] = args ? args.modelPackageGroupPolicy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["modelPackageGroupArn"] = undefined /*out*/;
            resourceInputs["modelPackageGroupStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagemakerModelPackageGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagemakerModelPackageGroup resources.
 */
export interface SagemakerModelPackageGroupState {
    /**
     * The time at which the model package group was created.
     */
    creationTime?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the model package group.
     */
    modelPackageGroupArn?: pulumi.Input<string>;
    /**
     * The description of the model package group.
     */
    modelPackageGroupDescription?: pulumi.Input<string>;
    /**
     * The name of the model package group.
     */
    modelPackageGroupName?: pulumi.Input<string>;
    modelPackageGroupPolicy?: pulumi.Input<string>;
    /**
     * The status of a modelpackage group job.
     */
    modelPackageGroupStatus?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.SagemakerModelPackageGroupTag>[]>;
}

/**
 * The set of arguments for constructing a SagemakerModelPackageGroup resource.
 */
export interface SagemakerModelPackageGroupArgs {
    /**
     * The description of the model package group.
     */
    modelPackageGroupDescription?: pulumi.Input<string>;
    /**
     * The name of the model package group.
     */
    modelPackageGroupName: pulumi.Input<string>;
    modelPackageGroupPolicy?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.SagemakerModelPackageGroupTag>[]>;
}
