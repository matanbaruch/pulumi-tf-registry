// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FwTcpRstCloseImmediate extends pulumi.CustomResource {
    /**
     * Get an existing FwTcpRstCloseImmediate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FwTcpRstCloseImmediateState, opts?: pulumi.CustomResourceOptions): FwTcpRstCloseImmediate {
        return new FwTcpRstCloseImmediate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/fwTcpRstCloseImmediate:FwTcpRstCloseImmediate';

    /**
     * Returns true if the given object is an instance of FwTcpRstCloseImmediate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FwTcpRstCloseImmediate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FwTcpRstCloseImmediate.__pulumiType;
    }

    /**
     * 'enable': Enable TCP RST close immediate (default); 'disable': Disable TCP RST close immediate;
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FwTcpRstCloseImmediate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FwTcpRstCloseImmediateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FwTcpRstCloseImmediateArgs | FwTcpRstCloseImmediateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FwTcpRstCloseImmediateState | undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FwTcpRstCloseImmediateArgs | undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FwTcpRstCloseImmediate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FwTcpRstCloseImmediate resources.
 */
export interface FwTcpRstCloseImmediateState {
    /**
     * 'enable': Enable TCP RST close immediate (default); 'disable': Disable TCP RST close immediate;
     */
    status?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FwTcpRstCloseImmediate resource.
 */
export interface FwTcpRstCloseImmediateArgs {
    /**
     * 'enable': Enable TCP RST close immediate (default); 'disable': Disable TCP RST close immediate;
     */
    status?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
