// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerBonjourprofilePolicylist extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerBonjourprofilePolicylist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerBonjourprofilePolicylistState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerBonjourprofilePolicylist {
        return new ObjectWirelesscontrollerBonjourprofilePolicylist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerBonjourprofilePolicylist:ObjectWirelesscontrollerBonjourprofilePolicylist';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerBonjourprofilePolicylist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerBonjourprofilePolicylist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerBonjourprofilePolicylist.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly bonjourProfile!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly fromVlan!: pulumi.Output<string>;
    public readonly policyId!: pulumi.Output<number | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly services!: pulumi.Output<string[]>;
    public readonly toVlan!: pulumi.Output<string>;

    /**
     * Create a ObjectWirelesscontrollerBonjourprofilePolicylist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWirelesscontrollerBonjourprofilePolicylistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerBonjourprofilePolicylistArgs | ObjectWirelesscontrollerBonjourprofilePolicylistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerBonjourprofilePolicylistState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["bonjourProfile"] = state ? state.bonjourProfile : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fromVlan"] = state ? state.fromVlan : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["toVlan"] = state ? state.toVlan : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerBonjourprofilePolicylistArgs | undefined;
            if ((!args || args.bonjourProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bonjourProfile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["bonjourProfile"] = args ? args.bonjourProfile : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fromVlan"] = args ? args.fromVlan : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["toVlan"] = args ? args.toVlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWirelesscontrollerBonjourprofilePolicylist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerBonjourprofilePolicylist resources.
 */
export interface ObjectWirelesscontrollerBonjourprofilePolicylistState {
    adom?: pulumi.Input<string>;
    bonjourProfile?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fromVlan?: pulumi.Input<string>;
    policyId?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    toVlan?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerBonjourprofilePolicylist resource.
 */
export interface ObjectWirelesscontrollerBonjourprofilePolicylistArgs {
    adom?: pulumi.Input<string>;
    bonjourProfile: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    fromVlan?: pulumi.Input<string>;
    policyId?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<string>[]>;
    toVlan?: pulumi.Input<string>;
}
