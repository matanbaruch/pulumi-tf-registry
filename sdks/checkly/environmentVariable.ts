// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EnvironmentVariable extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentVariableState, opts?: pulumi.CustomResourceOptions): EnvironmentVariable {
        return new EnvironmentVariable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkly:index/environmentVariable:EnvironmentVariable';

    /**
     * Returns true if the given object is an instance of EnvironmentVariable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentVariable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentVariable.__pulumiType;
    }

    public readonly key!: pulumi.Output<string>;
    public readonly locked!: pulumi.Output<boolean | undefined>;
    public readonly secret!: pulumi.Output<boolean | undefined>;
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a EnvironmentVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentVariableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentVariableArgs | EnvironmentVariableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentVariableState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as EnvironmentVariableArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnvironmentVariable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnvironmentVariable resources.
 */
export interface EnvironmentVariableState {
    key?: pulumi.Input<string>;
    locked?: pulumi.Input<boolean>;
    secret?: pulumi.Input<boolean>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EnvironmentVariable resource.
 */
export interface EnvironmentVariableArgs {
    key: pulumi.Input<string>;
    locked?: pulumi.Input<boolean>;
    secret?: pulumi.Input<boolean>;
    value: pulumi.Input<string>;
}
