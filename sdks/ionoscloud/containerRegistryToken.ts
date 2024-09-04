// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerRegistryToken extends pulumi.CustomResource {
    /**
     * Get an existing ContainerRegistryToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerRegistryTokenState, opts?: pulumi.CustomResourceOptions): ContainerRegistryToken {
        return new ContainerRegistryToken(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/containerRegistryToken:ContainerRegistryToken';

    /**
     * Returns true if the given object is an instance of ContainerRegistryToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerRegistryToken {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerRegistryToken.__pulumiType;
    }

    public /*out*/ readonly credentials!: pulumi.Output<outputs.ContainerRegistryTokenCredential[]>;
    public readonly expiryDate!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly registryId!: pulumi.Output<string>;
    /**
     * Saves password to file. Only works on create. Takes as argument a file name, or a file path
     */
    public readonly savePasswordToFile!: pulumi.Output<string | undefined>;
    public readonly scopes!: pulumi.Output<outputs.ContainerRegistryTokenScope[] | undefined>;
    /**
     * Can be one of enabled, disabled
     */
    public readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerRegistryTokenTimeouts | undefined>;

    /**
     * Create a ContainerRegistryToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerRegistryTokenArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerRegistryTokenArgs | ContainerRegistryTokenState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerRegistryTokenState | undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["expiryDate"] = state ? state.expiryDate : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["registryId"] = state ? state.registryId : undefined;
            resourceInputs["savePasswordToFile"] = state ? state.savePasswordToFile : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ContainerRegistryTokenArgs | undefined;
            if ((!args || args.registryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryId'");
            }
            resourceInputs["expiryDate"] = args ? args.expiryDate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["registryId"] = args ? args.registryId : undefined;
            resourceInputs["savePasswordToFile"] = args ? args.savePasswordToFile : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["credentials"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerRegistryToken.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerRegistryToken resources.
 */
export interface ContainerRegistryTokenState {
    credentials?: pulumi.Input<pulumi.Input<inputs.ContainerRegistryTokenCredential>[]>;
    expiryDate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    registryId?: pulumi.Input<string>;
    /**
     * Saves password to file. Only works on create. Takes as argument a file name, or a file path
     */
    savePasswordToFile?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.ContainerRegistryTokenScope>[]>;
    /**
     * Can be one of enabled, disabled
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTokenTimeouts>;
}

/**
 * The set of arguments for constructing a ContainerRegistryToken resource.
 */
export interface ContainerRegistryTokenArgs {
    expiryDate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    registryId: pulumi.Input<string>;
    /**
     * Saves password to file. Only works on create. Takes as argument a file name, or a file path
     */
    savePasswordToFile?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.ContainerRegistryTokenScope>[]>;
    /**
     * Can be one of enabled, disabled
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTokenTimeouts>;
}
