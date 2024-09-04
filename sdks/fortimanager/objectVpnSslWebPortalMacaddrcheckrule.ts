// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectVpnSslWebPortalMacaddrcheckrule extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVpnSslWebPortalMacaddrcheckrule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVpnSslWebPortalMacaddrcheckruleState, opts?: pulumi.CustomResourceOptions): ObjectVpnSslWebPortalMacaddrcheckrule {
        return new ObjectVpnSslWebPortalMacaddrcheckrule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVpnSslWebPortalMacaddrcheckrule:ObjectVpnSslWebPortalMacaddrcheckrule';

    /**
     * Returns true if the given object is an instance of ObjectVpnSslWebPortalMacaddrcheckrule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVpnSslWebPortalMacaddrcheckrule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVpnSslWebPortalMacaddrcheckrule.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly macAddrLists!: pulumi.Output<string[]>;
    public readonly macAddrMask!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly portal!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectVpnSslWebPortalMacaddrcheckrule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectVpnSslWebPortalMacaddrcheckruleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVpnSslWebPortalMacaddrcheckruleArgs | ObjectVpnSslWebPortalMacaddrcheckruleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVpnSslWebPortalMacaddrcheckruleState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["macAddrLists"] = state ? state.macAddrLists : undefined;
            resourceInputs["macAddrMask"] = state ? state.macAddrMask : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portal"] = state ? state.portal : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectVpnSslWebPortalMacaddrcheckruleArgs | undefined;
            if ((!args || args.portal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portal'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["macAddrLists"] = args ? args.macAddrLists : undefined;
            resourceInputs["macAddrMask"] = args ? args.macAddrMask : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portal"] = args ? args.portal : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectVpnSslWebPortalMacaddrcheckrule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVpnSslWebPortalMacaddrcheckrule resources.
 */
export interface ObjectVpnSslWebPortalMacaddrcheckruleState {
    adom?: pulumi.Input<string>;
    macAddrLists?: pulumi.Input<pulumi.Input<string>[]>;
    macAddrMask?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    portal?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVpnSslWebPortalMacaddrcheckrule resource.
 */
export interface ObjectVpnSslWebPortalMacaddrcheckruleArgs {
    adom?: pulumi.Input<string>;
    macAddrLists?: pulumi.Input<pulumi.Input<string>[]>;
    macAddrMask?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    portal: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
