// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BootstrapNetwork extends pulumi.CustomResource {
    /**
     * Get an existing BootstrapNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BootstrapNetworkState, opts?: pulumi.CustomResourceOptions): BootstrapNetwork {
        return new BootstrapNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'quorum:index/bootstrapNetwork:BootstrapNetwork';

    /**
     * Returns true if the given object is an instance of BootstrapNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BootstrapNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BootstrapNetwork.__pulumiType;
    }

    /**
     * Name of a new network. Directory name restriction applied
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Absolute path to a directory representing this new network
     */
    public /*out*/ readonly networkDirAbs!: pulumi.Output<string>;
    /**
     * File system path to the directory on which new directory will be created. Default is current working directory
     */
    public readonly targetDir!: pulumi.Output<string | undefined>;

    /**
     * Create a BootstrapNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BootstrapNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BootstrapNetworkArgs | BootstrapNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BootstrapNetworkState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkDirAbs"] = state ? state.networkDirAbs : undefined;
            resourceInputs["targetDir"] = state ? state.targetDir : undefined;
        } else {
            const args = argsOrState as BootstrapNetworkArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["targetDir"] = args ? args.targetDir : undefined;
            resourceInputs["networkDirAbs"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BootstrapNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BootstrapNetwork resources.
 */
export interface BootstrapNetworkState {
    /**
     * Name of a new network. Directory name restriction applied
     */
    name?: pulumi.Input<string>;
    /**
     * Absolute path to a directory representing this new network
     */
    networkDirAbs?: pulumi.Input<string>;
    /**
     * File system path to the directory on which new directory will be created. Default is current working directory
     */
    targetDir?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BootstrapNetwork resource.
 */
export interface BootstrapNetworkArgs {
    /**
     * Name of a new network. Directory name restriction applied
     */
    name?: pulumi.Input<string>;
    /**
     * File system path to the directory on which new directory will be created. Default is current working directory
     */
    targetDir?: pulumi.Input<string>;
}
