// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultObscuredValue extends pulumi.CustomResource {
    /**
     * Get an existing DefaultObscuredValue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultObscuredValueState, opts?: pulumi.CustomResourceOptions): DefaultObscuredValue {
        return new DefaultObscuredValue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultObscuredValue:DefaultObscuredValue';

    /**
     * Returns true if the given object is an instance of DefaultObscuredValue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultObscuredValue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultObscuredValue.__pulumiType;
    }

    /**
     * A description for this Obscured Value
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * The value to be stored in an obscured form.
     */
    public readonly obscuredValue!: pulumi.Output<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultObscuredValueRequiredAction[]>;
    /**
     * The type of Obscured Value resource. Options are ['obscured-value']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultObscuredValue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultObscuredValueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultObscuredValueArgs | DefaultObscuredValueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultObscuredValueState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["obscuredValue"] = state ? state.obscuredValue : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultObscuredValueArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["obscuredValue"] = args?.obscuredValue ? pulumi.secret(args.obscuredValue) : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["obscuredValue"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DefaultObscuredValue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultObscuredValue resources.
 */
export interface DefaultObscuredValueState {
    /**
     * A description for this Obscured Value
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value to be stored in an obscured form.
     */
    obscuredValue?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultObscuredValueRequiredAction>[]>;
    /**
     * The type of Obscured Value resource. Options are ['obscured-value']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultObscuredValue resource.
 */
export interface DefaultObscuredValueArgs {
    /**
     * A description for this Obscured Value
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * The value to be stored in an obscured form.
     */
    obscuredValue?: pulumi.Input<string>;
}
