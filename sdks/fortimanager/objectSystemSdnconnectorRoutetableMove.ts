// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSystemSdnconnectorRoutetableMove extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSystemSdnconnectorRoutetableMove resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSystemSdnconnectorRoutetableMoveState, opts?: pulumi.CustomResourceOptions): ObjectSystemSdnconnectorRoutetableMove {
        return new ObjectSystemSdnconnectorRoutetableMove(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSystemSdnconnectorRoutetableMove:ObjectSystemSdnconnectorRoutetableMove';

    /**
     * Returns true if the given object is an instance of ObjectSystemSdnconnectorRoutetableMove.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSystemSdnconnectorRoutetableMove {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSystemSdnconnectorRoutetableMove.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly option!: pulumi.Output<string>;
    public readonly routeTable!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sdnConnector!: pulumi.Output<string>;
    public readonly statePos!: pulumi.Output<string>;
    public readonly target!: pulumi.Output<string>;

    /**
     * Create a ObjectSystemSdnconnectorRoutetableMove resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectSystemSdnconnectorRoutetableMoveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSystemSdnconnectorRoutetableMoveArgs | ObjectSystemSdnconnectorRoutetableMoveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSystemSdnconnectorRoutetableMoveState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["option"] = state ? state.option : undefined;
            resourceInputs["routeTable"] = state ? state.routeTable : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sdnConnector"] = state ? state.sdnConnector : undefined;
            resourceInputs["statePos"] = state ? state.statePos : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as ObjectSystemSdnconnectorRoutetableMoveArgs | undefined;
            if ((!args || args.option === undefined) && !opts.urn) {
                throw new Error("Missing required property 'option'");
            }
            if ((!args || args.routeTable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeTable'");
            }
            if ((!args || args.sdnConnector === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sdnConnector'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["option"] = args ? args.option : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sdnConnector"] = args ? args.sdnConnector : undefined;
            resourceInputs["statePos"] = args ? args.statePos : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSystemSdnconnectorRoutetableMove.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSystemSdnconnectorRoutetableMove resources.
 */
export interface ObjectSystemSdnconnectorRoutetableMoveState {
    adom?: pulumi.Input<string>;
    option?: pulumi.Input<string>;
    routeTable?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectSystemSdnconnectorRoutetableMove resource.
 */
export interface ObjectSystemSdnconnectorRoutetableMoveArgs {
    adom?: pulumi.Input<string>;
    option: pulumi.Input<string>;
    routeTable: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target: pulumi.Input<string>;
}
