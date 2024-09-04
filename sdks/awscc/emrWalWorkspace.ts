// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EmrWalWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing EmrWalWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EmrWalWorkspaceState, opts?: pulumi.CustomResourceOptions): EmrWalWorkspace {
        return new EmrWalWorkspace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/emrWalWorkspace:EmrWalWorkspace';

    /**
     * Returns true if the given object is an instance of EmrWalWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EmrWalWorkspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EmrWalWorkspace.__pulumiType;
    }

    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.EmrWalWorkspaceTag[]>;
    /**
     * The name of the emrwal container
     */
    public readonly walWorkspaceName!: pulumi.Output<string>;

    /**
     * Create a EmrWalWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EmrWalWorkspaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EmrWalWorkspaceArgs | EmrWalWorkspaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EmrWalWorkspaceState | undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["walWorkspaceName"] = state ? state.walWorkspaceName : undefined;
        } else {
            const args = argsOrState as EmrWalWorkspaceArgs | undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["walWorkspaceName"] = args ? args.walWorkspaceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EmrWalWorkspace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EmrWalWorkspace resources.
 */
export interface EmrWalWorkspaceState {
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.EmrWalWorkspaceTag>[]>;
    /**
     * The name of the emrwal container
     */
    walWorkspaceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EmrWalWorkspace resource.
 */
export interface EmrWalWorkspaceArgs {
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.EmrWalWorkspaceTag>[]>;
    /**
     * The name of the emrwal container
     */
    walWorkspaceName?: pulumi.Input<string>;
}
