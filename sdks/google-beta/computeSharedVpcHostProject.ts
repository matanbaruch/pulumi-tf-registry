// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeSharedVpcHostProject extends pulumi.CustomResource {
    /**
     * Get an existing ComputeSharedVpcHostProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeSharedVpcHostProjectState, opts?: pulumi.CustomResourceOptions): ComputeSharedVpcHostProject {
        return new ComputeSharedVpcHostProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeSharedVpcHostProject:ComputeSharedVpcHostProject';

    /**
     * Returns true if the given object is an instance of ComputeSharedVpcHostProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeSharedVpcHostProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeSharedVpcHostProject.__pulumiType;
    }

    /**
     * The ID of the project that will serve as a Shared VPC host project
     */
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeSharedVpcHostProjectTimeouts | undefined>;

    /**
     * Create a ComputeSharedVpcHostProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeSharedVpcHostProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeSharedVpcHostProjectArgs | ComputeSharedVpcHostProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeSharedVpcHostProjectState | undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeSharedVpcHostProjectArgs | undefined;
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeSharedVpcHostProject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeSharedVpcHostProject resources.
 */
export interface ComputeSharedVpcHostProjectState {
    /**
     * The ID of the project that will serve as a Shared VPC host project
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeSharedVpcHostProjectTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeSharedVpcHostProject resource.
 */
export interface ComputeSharedVpcHostProjectArgs {
    /**
     * The ID of the project that will serve as a Shared VPC host project
     */
    project: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeSharedVpcHostProjectTimeouts>;
}
