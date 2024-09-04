// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AthenaWorkGroup extends pulumi.CustomResource {
    /**
     * Get an existing AthenaWorkGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AthenaWorkGroupState, opts?: pulumi.CustomResourceOptions): AthenaWorkGroup {
        return new AthenaWorkGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/athenaWorkGroup:AthenaWorkGroup';

    /**
     * Returns true if the given object is an instance of AthenaWorkGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AthenaWorkGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AthenaWorkGroup.__pulumiType;
    }

    /**
     * The date and time the workgroup was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The workgroup description.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The workGroup name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
     */
    public readonly recursiveDeleteOption!: pulumi.Output<boolean>;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
     */
    public readonly tags!: pulumi.Output<outputs.AthenaWorkGroupTag[]>;
    /**
     * The workgroup configuration
     */
    public readonly workGroupConfiguration!: pulumi.Output<outputs.AthenaWorkGroupWorkGroupConfiguration>;
    /**
     * The workgroup configuration update object
     */
    public readonly workGroupConfigurationUpdates!: pulumi.Output<outputs.AthenaWorkGroupWorkGroupConfigurationUpdates>;

    /**
     * Create a AthenaWorkGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AthenaWorkGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AthenaWorkGroupArgs | AthenaWorkGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AthenaWorkGroupState | undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["recursiveDeleteOption"] = state ? state.recursiveDeleteOption : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["workGroupConfiguration"] = state ? state.workGroupConfiguration : undefined;
            resourceInputs["workGroupConfigurationUpdates"] = state ? state.workGroupConfigurationUpdates : undefined;
        } else {
            const args = argsOrState as AthenaWorkGroupArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recursiveDeleteOption"] = args ? args.recursiveDeleteOption : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workGroupConfiguration"] = args ? args.workGroupConfiguration : undefined;
            resourceInputs["workGroupConfigurationUpdates"] = args ? args.workGroupConfigurationUpdates : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AthenaWorkGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AthenaWorkGroup resources.
 */
export interface AthenaWorkGroupState {
    /**
     * The date and time the workgroup was created.
     */
    creationTime?: pulumi.Input<string>;
    /**
     * The workgroup description.
     */
    description?: pulumi.Input<string>;
    /**
     * The workGroup name.
     */
    name?: pulumi.Input<string>;
    /**
     * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
     */
    recursiveDeleteOption?: pulumi.Input<boolean>;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    state?: pulumi.Input<string>;
    /**
     * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
     */
    tags?: pulumi.Input<pulumi.Input<inputs.AthenaWorkGroupTag>[]>;
    /**
     * The workgroup configuration
     */
    workGroupConfiguration?: pulumi.Input<inputs.AthenaWorkGroupWorkGroupConfiguration>;
    /**
     * The workgroup configuration update object
     */
    workGroupConfigurationUpdates?: pulumi.Input<inputs.AthenaWorkGroupWorkGroupConfigurationUpdates>;
}

/**
 * The set of arguments for constructing a AthenaWorkGroup resource.
 */
export interface AthenaWorkGroupArgs {
    /**
     * The workgroup description.
     */
    description?: pulumi.Input<string>;
    /**
     * The workGroup name.
     */
    name?: pulumi.Input<string>;
    /**
     * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
     */
    recursiveDeleteOption?: pulumi.Input<boolean>;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    state?: pulumi.Input<string>;
    /**
     * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
     */
    tags?: pulumi.Input<pulumi.Input<inputs.AthenaWorkGroupTag>[]>;
    /**
     * The workgroup configuration
     */
    workGroupConfiguration?: pulumi.Input<inputs.AthenaWorkGroupWorkGroupConfiguration>;
    /**
     * The workgroup configuration update object
     */
    workGroupConfigurationUpdates?: pulumi.Input<inputs.AthenaWorkGroupWorkGroupConfigurationUpdates>;
}
