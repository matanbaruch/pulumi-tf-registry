// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ContainerRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerRegistryState, opts?: pulumi.CustomResourceOptions): ContainerRegistry {
        return new ContainerRegistry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'volterra:index/containerRegistry:ContainerRegistry';

    /**
     * Returns true if the given object is an instance of ContainerRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerRegistry.__pulumiType;
    }

    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly disable!: pulumi.Output<boolean | undefined>;
    public readonly email!: pulumi.Output<string | undefined>;
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly passwords!: pulumi.Output<outputs.ContainerRegistryPassword[]>;
    public readonly registry!: pulumi.Output<string>;
    public readonly userName!: pulumi.Output<string>;

    /**
     * Create a ContainerRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerRegistryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerRegistryArgs | ContainerRegistryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerRegistryState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["registry"] = state ? state.registry : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as ContainerRegistryArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.passwords === undefined) && !opts.urn) {
                throw new Error("Missing required property 'passwords'");
            }
            if ((!args || args.registry === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registry'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["passwords"] = args ? args.passwords : undefined;
            resourceInputs["registry"] = args ? args.registry : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerRegistry.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerRegistry resources.
 */
export interface ContainerRegistryState {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    email?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    passwords?: pulumi.Input<pulumi.Input<inputs.ContainerRegistryPassword>[]>;
    registry?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ContainerRegistry resource.
 */
export interface ContainerRegistryArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    email?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    passwords: pulumi.Input<pulumi.Input<inputs.ContainerRegistryPassword>[]>;
    registry: pulumi.Input<string>;
    userName: pulumi.Input<string>;
}
