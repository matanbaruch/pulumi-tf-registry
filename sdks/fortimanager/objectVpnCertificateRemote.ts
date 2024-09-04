// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectVpnCertificateRemote extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVpnCertificateRemote resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVpnCertificateRemoteState, opts?: pulumi.CustomResourceOptions): ObjectVpnCertificateRemote {
        return new ObjectVpnCertificateRemote(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVpnCertificateRemote:ObjectVpnCertificateRemote';

    /**
     * Returns true if the given object is an instance of ObjectVpnCertificateRemote.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVpnCertificateRemote {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVpnCertificateRemote.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly range!: pulumi.Output<string>;
    public readonly remote!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly source!: pulumi.Output<string>;

    /**
     * Create a ObjectVpnCertificateRemote resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectVpnCertificateRemoteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVpnCertificateRemoteArgs | ObjectVpnCertificateRemoteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVpnCertificateRemoteState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["range"] = state ? state.range : undefined;
            resourceInputs["remote"] = state ? state.remote : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
        } else {
            const args = argsOrState as ObjectVpnCertificateRemoteArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["range"] = args ? args.range : undefined;
            resourceInputs["remote"] = args ? args.remote : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectVpnCertificateRemote.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVpnCertificateRemote resources.
 */
export interface ObjectVpnCertificateRemoteState {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    range?: pulumi.Input<string>;
    remote?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVpnCertificateRemote resource.
 */
export interface ObjectVpnCertificateRemoteArgs {
    adom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    range?: pulumi.Input<string>;
    remote?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
}
