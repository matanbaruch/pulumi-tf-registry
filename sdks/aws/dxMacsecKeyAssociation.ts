// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DxMacsecKeyAssociation extends pulumi.CustomResource {
    /**
     * Get an existing DxMacsecKeyAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DxMacsecKeyAssociationState, opts?: pulumi.CustomResourceOptions): DxMacsecKeyAssociation {
        return new DxMacsecKeyAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/dxMacsecKeyAssociation:DxMacsecKeyAssociation';

    /**
     * Returns true if the given object is an instance of DxMacsecKeyAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DxMacsecKeyAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DxMacsecKeyAssociation.__pulumiType;
    }

    public readonly cak!: pulumi.Output<string | undefined>;
    public readonly ckn!: pulumi.Output<string>;
    public readonly connectionId!: pulumi.Output<string>;
    public readonly secretArn!: pulumi.Output<string>;
    public /*out*/ readonly startOn!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;

    /**
     * Create a DxMacsecKeyAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DxMacsecKeyAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DxMacsecKeyAssociationArgs | DxMacsecKeyAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DxMacsecKeyAssociationState | undefined;
            resourceInputs["cak"] = state ? state.cak : undefined;
            resourceInputs["ckn"] = state ? state.ckn : undefined;
            resourceInputs["connectionId"] = state ? state.connectionId : undefined;
            resourceInputs["secretArn"] = state ? state.secretArn : undefined;
            resourceInputs["startOn"] = state ? state.startOn : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as DxMacsecKeyAssociationArgs | undefined;
            if ((!args || args.connectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionId'");
            }
            resourceInputs["cak"] = args ? args.cak : undefined;
            resourceInputs["ckn"] = args ? args.ckn : undefined;
            resourceInputs["connectionId"] = args ? args.connectionId : undefined;
            resourceInputs["secretArn"] = args ? args.secretArn : undefined;
            resourceInputs["startOn"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DxMacsecKeyAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DxMacsecKeyAssociation resources.
 */
export interface DxMacsecKeyAssociationState {
    cak?: pulumi.Input<string>;
    ckn?: pulumi.Input<string>;
    connectionId?: pulumi.Input<string>;
    secretArn?: pulumi.Input<string>;
    startOn?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DxMacsecKeyAssociation resource.
 */
export interface DxMacsecKeyAssociationArgs {
    cak?: pulumi.Input<string>;
    ckn?: pulumi.Input<string>;
    connectionId: pulumi.Input<string>;
    secretArn?: pulumi.Input<string>;
}
