// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class L3DomainProfile extends pulumi.CustomResource {
    /**
     * Get an existing L3DomainProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3DomainProfileState, opts?: pulumi.CustomResourceOptions): L3DomainProfile {
        return new L3DomainProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3DomainProfile:L3DomainProfile';

    /**
     * Returns true if the given object is an instance of L3DomainProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3DomainProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3DomainProfile.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationExtnwRsOuts!: pulumi.Output<string[] | undefined>;
    public readonly relationInfraRsDomVxlanNsDef!: pulumi.Output<string>;
    public readonly relationInfraRsVipAddrNs!: pulumi.Output<string | undefined>;
    public readonly relationInfraRsVlanNs!: pulumi.Output<string | undefined>;
    public readonly relationInfraRsVlanNsDef!: pulumi.Output<string>;

    /**
     * Create a L3DomainProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: L3DomainProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3DomainProfileArgs | L3DomainProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3DomainProfileState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationExtnwRsOuts"] = state ? state.relationExtnwRsOuts : undefined;
            resourceInputs["relationInfraRsDomVxlanNsDef"] = state ? state.relationInfraRsDomVxlanNsDef : undefined;
            resourceInputs["relationInfraRsVipAddrNs"] = state ? state.relationInfraRsVipAddrNs : undefined;
            resourceInputs["relationInfraRsVlanNs"] = state ? state.relationInfraRsVlanNs : undefined;
            resourceInputs["relationInfraRsVlanNsDef"] = state ? state.relationInfraRsVlanNsDef : undefined;
        } else {
            const args = argsOrState as L3DomainProfileArgs | undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationExtnwRsOuts"] = args ? args.relationExtnwRsOuts : undefined;
            resourceInputs["relationInfraRsDomVxlanNsDef"] = args ? args.relationInfraRsDomVxlanNsDef : undefined;
            resourceInputs["relationInfraRsVipAddrNs"] = args ? args.relationInfraRsVipAddrNs : undefined;
            resourceInputs["relationInfraRsVlanNs"] = args ? args.relationInfraRsVlanNs : undefined;
            resourceInputs["relationInfraRsVlanNsDef"] = args ? args.relationInfraRsVlanNsDef : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3DomainProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3DomainProfile resources.
 */
export interface L3DomainProfileState {
    annotation?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationExtnwRsOuts?: pulumi.Input<pulumi.Input<string>[]>;
    relationInfraRsDomVxlanNsDef?: pulumi.Input<string>;
    relationInfraRsVipAddrNs?: pulumi.Input<string>;
    relationInfraRsVlanNs?: pulumi.Input<string>;
    relationInfraRsVlanNsDef?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a L3DomainProfile resource.
 */
export interface L3DomainProfileArgs {
    annotation?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationExtnwRsOuts?: pulumi.Input<pulumi.Input<string>[]>;
    relationInfraRsDomVxlanNsDef?: pulumi.Input<string>;
    relationInfraRsVipAddrNs?: pulumi.Input<string>;
    relationInfraRsVlanNs?: pulumi.Input<string>;
    relationInfraRsVlanNsDef?: pulumi.Input<string>;
}
