// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSystemSdnconnectorExternalaccountlist extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSystemSdnconnectorExternalaccountlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSystemSdnconnectorExternalaccountlistState, opts?: pulumi.CustomResourceOptions): ObjectSystemSdnconnectorExternalaccountlist {
        return new ObjectSystemSdnconnectorExternalaccountlist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSystemSdnconnectorExternalaccountlist:ObjectSystemSdnconnectorExternalaccountlist';

    /**
     * Returns true if the given object is an instance of ObjectSystemSdnconnectorExternalaccountlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSystemSdnconnectorExternalaccountlist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSystemSdnconnectorExternalaccountlist.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly externalId!: pulumi.Output<string | undefined>;
    public readonly regionLists!: pulumi.Output<string[]>;
    public readonly roleArn!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sdnConnector!: pulumi.Output<string>;

    /**
     * Create a ObjectSystemSdnconnectorExternalaccountlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectSystemSdnconnectorExternalaccountlistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSystemSdnconnectorExternalaccountlistArgs | ObjectSystemSdnconnectorExternalaccountlistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSystemSdnconnectorExternalaccountlistState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["regionLists"] = state ? state.regionLists : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sdnConnector"] = state ? state.sdnConnector : undefined;
        } else {
            const args = argsOrState as ObjectSystemSdnconnectorExternalaccountlistArgs | undefined;
            if ((!args || args.sdnConnector === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sdnConnector'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["externalId"] = args ? args.externalId : undefined;
            resourceInputs["regionLists"] = args ? args.regionLists : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sdnConnector"] = args ? args.sdnConnector : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSystemSdnconnectorExternalaccountlist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSystemSdnconnectorExternalaccountlist resources.
 */
export interface ObjectSystemSdnconnectorExternalaccountlistState {
    adom?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    regionLists?: pulumi.Input<pulumi.Input<string>[]>;
    roleArn?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectSystemSdnconnectorExternalaccountlist resource.
 */
export interface ObjectSystemSdnconnectorExternalaccountlistArgs {
    adom?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    regionLists?: pulumi.Input<pulumi.Input<string>[]>;
    roleArn?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sdnConnector: pulumi.Input<string>;
}
