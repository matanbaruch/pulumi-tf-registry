// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FexBundleGroup extends pulumi.CustomResource {
    /**
     * Get an existing FexBundleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FexBundleGroupState, opts?: pulumi.CustomResourceOptions): FexBundleGroup {
        return new FexBundleGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/fexBundleGroup:FexBundleGroup';

    /**
     * Returns true if the given object is an instance of FexBundleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FexBundleGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FexBundleGroup.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly fexProfileDn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationInfraRsFexBndlGrpToAggrIfs!: pulumi.Output<string[] | undefined>;
    public readonly relationInfraRsMonFexInfraPol!: pulumi.Output<string | undefined>;

    /**
     * Create a FexBundleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FexBundleGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FexBundleGroupArgs | FexBundleGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FexBundleGroupState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fexProfileDn"] = state ? state.fexProfileDn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationInfraRsFexBndlGrpToAggrIfs"] = state ? state.relationInfraRsFexBndlGrpToAggrIfs : undefined;
            resourceInputs["relationInfraRsMonFexInfraPol"] = state ? state.relationInfraRsMonFexInfraPol : undefined;
        } else {
            const args = argsOrState as FexBundleGroupArgs | undefined;
            if ((!args || args.fexProfileDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fexProfileDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fexProfileDn"] = args ? args.fexProfileDn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationInfraRsFexBndlGrpToAggrIfs"] = args ? args.relationInfraRsFexBndlGrpToAggrIfs : undefined;
            resourceInputs["relationInfraRsMonFexInfraPol"] = args ? args.relationInfraRsMonFexInfraPol : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FexBundleGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FexBundleGroup resources.
 */
export interface FexBundleGroupState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fexProfileDn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsFexBndlGrpToAggrIfs?: pulumi.Input<pulumi.Input<string>[]>;
    relationInfraRsMonFexInfraPol?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FexBundleGroup resource.
 */
export interface FexBundleGroupArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fexProfileDn: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsFexBndlGrpToAggrIfs?: pulumi.Input<pulumi.Input<string>[]>;
    relationInfraRsMonFexInfraPol?: pulumi.Input<string>;
}
