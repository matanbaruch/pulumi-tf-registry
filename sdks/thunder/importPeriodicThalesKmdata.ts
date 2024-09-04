// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ImportPeriodicThalesKmdata extends pulumi.CustomResource {
    /**
     * Get an existing ImportPeriodicThalesKmdata resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportPeriodicThalesKmdataState, opts?: pulumi.CustomResourceOptions): ImportPeriodicThalesKmdata {
        return new ImportPeriodicThalesKmdata(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/importPeriodicThalesKmdata:ImportPeriodicThalesKmdata';

    /**
     * Returns true if the given object is an instance of ImportPeriodicThalesKmdata.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportPeriodicThalesKmdata {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportPeriodicThalesKmdata.__pulumiType;
    }

    /**
     * Overwrite existing file
     */
    public readonly overwrite!: pulumi.Output<number | undefined>;
    /**
     * Specify the period in second
     */
    public readonly period!: pulumi.Output<number | undefined>;
    /**
     * profile name for remote url
     */
    public readonly remoteFile!: pulumi.Output<string | undefined>;
    /**
     * import Thales Kmdata files - in .tgz format that has all files needed by AX
     */
    public readonly thalesKmdata!: pulumi.Output<string>;
    /**
     * Use management port as source port
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ImportPeriodicThalesKmdata resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportPeriodicThalesKmdataArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportPeriodicThalesKmdataArgs | ImportPeriodicThalesKmdataState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportPeriodicThalesKmdataState | undefined;
            resourceInputs["overwrite"] = state ? state.overwrite : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["remoteFile"] = state ? state.remoteFile : undefined;
            resourceInputs["thalesKmdata"] = state ? state.thalesKmdata : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ImportPeriodicThalesKmdataArgs | undefined;
            if ((!args || args.thalesKmdata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'thalesKmdata'");
            }
            resourceInputs["overwrite"] = args ? args.overwrite : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["remoteFile"] = args ? args.remoteFile : undefined;
            resourceInputs["thalesKmdata"] = args ? args.thalesKmdata : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ImportPeriodicThalesKmdata.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ImportPeriodicThalesKmdata resources.
 */
export interface ImportPeriodicThalesKmdataState {
    /**
     * Overwrite existing file
     */
    overwrite?: pulumi.Input<number>;
    /**
     * Specify the period in second
     */
    period?: pulumi.Input<number>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * import Thales Kmdata files - in .tgz format that has all files needed by AX
     */
    thalesKmdata?: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportPeriodicThalesKmdata resource.
 */
export interface ImportPeriodicThalesKmdataArgs {
    /**
     * Overwrite existing file
     */
    overwrite?: pulumi.Input<number>;
    /**
     * Specify the period in second
     */
    period?: pulumi.Input<number>;
    /**
     * profile name for remote url
     */
    remoteFile?: pulumi.Input<string>;
    /**
     * import Thales Kmdata files - in .tgz format that has all files needed by AX
     */
    thalesKmdata: pulumi.Input<string>;
    /**
     * Use management port as source port
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
