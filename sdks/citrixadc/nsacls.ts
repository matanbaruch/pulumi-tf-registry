// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Nsacls extends pulumi.CustomResource {
    /**
     * Get an existing Nsacls resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsaclsState, opts?: pulumi.CustomResourceOptions): Nsacls {
        return new Nsacls(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/nsacls:Nsacls';

    /**
     * Returns true if the given object is an instance of Nsacls.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Nsacls {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nsacls.__pulumiType;
    }

    public readonly acls!: pulumi.Output<outputs.NsaclsAcl[] | undefined>;
    public readonly aclsname!: pulumi.Output<string>;

    /**
     * Create a Nsacls resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NsaclsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsaclsArgs | NsaclsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsaclsState | undefined;
            resourceInputs["acls"] = state ? state.acls : undefined;
            resourceInputs["aclsname"] = state ? state.aclsname : undefined;
        } else {
            const args = argsOrState as NsaclsArgs | undefined;
            resourceInputs["acls"] = args ? args.acls : undefined;
            resourceInputs["aclsname"] = args ? args.aclsname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Nsacls.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Nsacls resources.
 */
export interface NsaclsState {
    acls?: pulumi.Input<pulumi.Input<inputs.NsaclsAcl>[]>;
    aclsname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Nsacls resource.
 */
export interface NsaclsArgs {
    acls?: pulumi.Input<pulumi.Input<inputs.NsaclsAcl>[]>;
    aclsname?: pulumi.Input<string>;
}
