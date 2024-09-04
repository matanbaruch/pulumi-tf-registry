// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationSignature extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationSignature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationSignatureState, opts?: pulumi.CustomResourceOptions): ApplicationSignature {
        return new ApplicationSignature(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/applicationSignature:ApplicationSignature';

    /**
     * Returns true if the given object is an instance of ApplicationSignature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationSignature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationSignature.__pulumiType;
    }

    public readonly andConditions!: pulumi.Output<outputs.ApplicationSignatureAndCondition[] | undefined>;
    public readonly applicationObject!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly orderedMatch!: pulumi.Output<boolean | undefined>;
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a ApplicationSignature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationSignatureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationSignatureArgs | ApplicationSignatureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationSignatureState | undefined;
            resourceInputs["andConditions"] = state ? state.andConditions : undefined;
            resourceInputs["applicationObject"] = state ? state.applicationObject : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orderedMatch"] = state ? state.orderedMatch : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as ApplicationSignatureArgs | undefined;
            if ((!args || args.applicationObject === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationObject'");
            }
            resourceInputs["andConditions"] = args ? args.andConditions : undefined;
            resourceInputs["applicationObject"] = args ? args.applicationObject : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orderedMatch"] = args ? args.orderedMatch : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationSignature.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationSignature resources.
 */
export interface ApplicationSignatureState {
    andConditions?: pulumi.Input<pulumi.Input<inputs.ApplicationSignatureAndCondition>[]>;
    applicationObject?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orderedMatch?: pulumi.Input<boolean>;
    scope?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApplicationSignature resource.
 */
export interface ApplicationSignatureArgs {
    andConditions?: pulumi.Input<pulumi.Input<inputs.ApplicationSignatureAndCondition>[]>;
    applicationObject: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orderedMatch?: pulumi.Input<boolean>;
    scope?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
