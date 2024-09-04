// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystempSystemCentralmanagementServerlist extends pulumi.CustomResource {
    /**
     * Get an existing SystempSystemCentralmanagementServerlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystempSystemCentralmanagementServerlistState, opts?: pulumi.CustomResourceOptions): SystempSystemCentralmanagementServerlist {
        return new SystempSystemCentralmanagementServerlist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systempSystemCentralmanagementServerlist:SystempSystemCentralmanagementServerlist';

    /**
     * Returns true if the given object is an instance of SystempSystemCentralmanagementServerlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystempSystemCentralmanagementServerlist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystempSystemCentralmanagementServerlist.__pulumiType;
    }

    public readonly addrType!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly devprof!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly fqdn!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly serverAddress!: pulumi.Output<string>;
    public readonly serverAddress6!: pulumi.Output<string>;
    public readonly serverTypes!: pulumi.Output<string[]>;

    /**
     * Create a SystempSystemCentralmanagementServerlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystempSystemCentralmanagementServerlistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystempSystemCentralmanagementServerlistArgs | SystempSystemCentralmanagementServerlistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystempSystemCentralmanagementServerlistState | undefined;
            resourceInputs["addrType"] = state ? state.addrType : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["devprof"] = state ? state.devprof : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["serverAddress"] = state ? state.serverAddress : undefined;
            resourceInputs["serverAddress6"] = state ? state.serverAddress6 : undefined;
            resourceInputs["serverTypes"] = state ? state.serverTypes : undefined;
        } else {
            const args = argsOrState as SystempSystemCentralmanagementServerlistArgs | undefined;
            if ((!args || args.devprof === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devprof'");
            }
            resourceInputs["addrType"] = args ? args.addrType : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["devprof"] = args ? args.devprof : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["serverAddress"] = args ? args.serverAddress : undefined;
            resourceInputs["serverAddress6"] = args ? args.serverAddress6 : undefined;
            resourceInputs["serverTypes"] = args ? args.serverTypes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystempSystemCentralmanagementServerlist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystempSystemCentralmanagementServerlist resources.
 */
export interface SystempSystemCentralmanagementServerlistState {
    addrType?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    devprof?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    fqdn?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serverAddress?: pulumi.Input<string>;
    serverAddress6?: pulumi.Input<string>;
    serverTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystempSystemCentralmanagementServerlist resource.
 */
export interface SystempSystemCentralmanagementServerlistArgs {
    addrType?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    devprof: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    fqdn?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serverAddress?: pulumi.Input<string>;
    serverAddress6?: pulumi.Input<string>;
    serverTypes?: pulumi.Input<pulumi.Input<string>[]>;
}
