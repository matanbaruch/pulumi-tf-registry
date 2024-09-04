// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerRegistryTokenPassword extends pulumi.CustomResource {
    /**
     * Get an existing ContainerRegistryTokenPassword resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerRegistryTokenPasswordState, opts?: pulumi.CustomResourceOptions): ContainerRegistryTokenPassword {
        return new ContainerRegistryTokenPassword(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/containerRegistryTokenPassword:ContainerRegistryTokenPassword';

    /**
     * Returns true if the given object is an instance of ContainerRegistryTokenPassword.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerRegistryTokenPassword {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerRegistryTokenPassword.__pulumiType;
    }

    public readonly containerRegistryTokenId!: pulumi.Output<string>;
    public readonly password1!: pulumi.Output<outputs.ContainerRegistryTokenPasswordPassword1>;
    public readonly password2!: pulumi.Output<outputs.ContainerRegistryTokenPasswordPassword2 | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerRegistryTokenPasswordTimeouts | undefined>;

    /**
     * Create a ContainerRegistryTokenPassword resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerRegistryTokenPasswordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerRegistryTokenPasswordArgs | ContainerRegistryTokenPasswordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerRegistryTokenPasswordState | undefined;
            resourceInputs["containerRegistryTokenId"] = state ? state.containerRegistryTokenId : undefined;
            resourceInputs["password1"] = state ? state.password1 : undefined;
            resourceInputs["password2"] = state ? state.password2 : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ContainerRegistryTokenPasswordArgs | undefined;
            if ((!args || args.containerRegistryTokenId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerRegistryTokenId'");
            }
            if ((!args || args.password1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password1'");
            }
            resourceInputs["containerRegistryTokenId"] = args ? args.containerRegistryTokenId : undefined;
            resourceInputs["password1"] = args ? args.password1 : undefined;
            resourceInputs["password2"] = args ? args.password2 : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerRegistryTokenPassword.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerRegistryTokenPassword resources.
 */
export interface ContainerRegistryTokenPasswordState {
    containerRegistryTokenId?: pulumi.Input<string>;
    password1?: pulumi.Input<inputs.ContainerRegistryTokenPasswordPassword1>;
    password2?: pulumi.Input<inputs.ContainerRegistryTokenPasswordPassword2>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTokenPasswordTimeouts>;
}

/**
 * The set of arguments for constructing a ContainerRegistryTokenPassword resource.
 */
export interface ContainerRegistryTokenPasswordArgs {
    containerRegistryTokenId: pulumi.Input<string>;
    password1: pulumi.Input<inputs.ContainerRegistryTokenPasswordPassword1>;
    password2?: pulumi.Input<inputs.ContainerRegistryTokenPasswordPassword2>;
    timeouts?: pulumi.Input<inputs.ContainerRegistryTokenPasswordTimeouts>;
}
