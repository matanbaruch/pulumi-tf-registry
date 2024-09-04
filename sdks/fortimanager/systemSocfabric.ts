// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemSocfabric extends pulumi.CustomResource {
    /**
     * Get an existing SystemSocfabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSocfabricState, opts?: pulumi.CustomResourceOptions): SystemSocfabric {
        return new SystemSocfabric(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemSocfabric:SystemSocfabric';

    /**
     * Returns true if the given object is an instance of SystemSocfabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSocfabric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSocfabric.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly psks!: pulumi.Output<string[]>;
    public readonly role!: pulumi.Output<string>;
    public readonly secureConnection!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly supervisor!: pulumi.Output<string | undefined>;
    public readonly trustedLists!: pulumi.Output<outputs.SystemSocfabricTrustedList[] | undefined>;

    /**
     * Create a SystemSocfabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSocfabricArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSocfabricArgs | SystemSocfabricState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSocfabricState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["psks"] = state ? state.psks : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["secureConnection"] = state ? state.secureConnection : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["supervisor"] = state ? state.supervisor : undefined;
            resourceInputs["trustedLists"] = state ? state.trustedLists : undefined;
        } else {
            const args = argsOrState as SystemSocfabricArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["psks"] = args?.psks ? pulumi.secret(args.psks) : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["secureConnection"] = args ? args.secureConnection : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["supervisor"] = args ? args.supervisor : undefined;
            resourceInputs["trustedLists"] = args ? args.trustedLists : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["psks"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemSocfabric.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSocfabric resources.
 */
export interface SystemSocfabricState {
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    psks?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
    secureConnection?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    supervisor?: pulumi.Input<string>;
    trustedLists?: pulumi.Input<pulumi.Input<inputs.SystemSocfabricTrustedList>[]>;
}

/**
 * The set of arguments for constructing a SystemSocfabric resource.
 */
export interface SystemSocfabricArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    psks?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
    secureConnection?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    supervisor?: pulumi.Input<string>;
    trustedLists?: pulumi.Input<pulumi.Input<inputs.SystemSocfabricTrustedList>[]>;
}
