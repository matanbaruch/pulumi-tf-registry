// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectAntivirusProfileSmtp extends pulumi.CustomResource {
    /**
     * Get an existing ObjectAntivirusProfileSmtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectAntivirusProfileSmtpState, opts?: pulumi.CustomResourceOptions): ObjectAntivirusProfileSmtp {
        return new ObjectAntivirusProfileSmtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectAntivirusProfileSmtp:ObjectAntivirusProfileSmtp';

    /**
     * Returns true if the given object is an instance of ObjectAntivirusProfileSmtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectAntivirusProfileSmtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectAntivirusProfileSmtp.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly archiveBlocks!: pulumi.Output<string[]>;
    public readonly archiveLogs!: pulumi.Output<string[]>;
    public readonly avScan!: pulumi.Output<string>;
    public readonly contentDisarm!: pulumi.Output<string>;
    public readonly emulator!: pulumi.Output<string>;
    public readonly executables!: pulumi.Output<string>;
    public readonly externalBlocklist!: pulumi.Output<string>;
    public readonly fortiai!: pulumi.Output<string>;
    public readonly fortindr!: pulumi.Output<string>;
    public readonly fortisandbox!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<string[]>;
    public readonly outbreakPrevention!: pulumi.Output<string>;
    public readonly profile!: pulumi.Output<string>;
    public readonly quarantine!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectAntivirusProfileSmtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectAntivirusProfileSmtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectAntivirusProfileSmtpArgs | ObjectAntivirusProfileSmtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectAntivirusProfileSmtpState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["archiveBlocks"] = state ? state.archiveBlocks : undefined;
            resourceInputs["archiveLogs"] = state ? state.archiveLogs : undefined;
            resourceInputs["avScan"] = state ? state.avScan : undefined;
            resourceInputs["contentDisarm"] = state ? state.contentDisarm : undefined;
            resourceInputs["emulator"] = state ? state.emulator : undefined;
            resourceInputs["executables"] = state ? state.executables : undefined;
            resourceInputs["externalBlocklist"] = state ? state.externalBlocklist : undefined;
            resourceInputs["fortiai"] = state ? state.fortiai : undefined;
            resourceInputs["fortindr"] = state ? state.fortindr : undefined;
            resourceInputs["fortisandbox"] = state ? state.fortisandbox : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["outbreakPrevention"] = state ? state.outbreakPrevention : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["quarantine"] = state ? state.quarantine : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectAntivirusProfileSmtpArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["archiveBlocks"] = args ? args.archiveBlocks : undefined;
            resourceInputs["archiveLogs"] = args ? args.archiveLogs : undefined;
            resourceInputs["avScan"] = args ? args.avScan : undefined;
            resourceInputs["contentDisarm"] = args ? args.contentDisarm : undefined;
            resourceInputs["emulator"] = args ? args.emulator : undefined;
            resourceInputs["executables"] = args ? args.executables : undefined;
            resourceInputs["externalBlocklist"] = args ? args.externalBlocklist : undefined;
            resourceInputs["fortiai"] = args ? args.fortiai : undefined;
            resourceInputs["fortindr"] = args ? args.fortindr : undefined;
            resourceInputs["fortisandbox"] = args ? args.fortisandbox : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["outbreakPrevention"] = args ? args.outbreakPrevention : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["quarantine"] = args ? args.quarantine : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectAntivirusProfileSmtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectAntivirusProfileSmtp resources.
 */
export interface ObjectAntivirusProfileSmtpState {
    adom?: pulumi.Input<string>;
    archiveBlocks?: pulumi.Input<pulumi.Input<string>[]>;
    archiveLogs?: pulumi.Input<pulumi.Input<string>[]>;
    avScan?: pulumi.Input<string>;
    contentDisarm?: pulumi.Input<string>;
    emulator?: pulumi.Input<string>;
    executables?: pulumi.Input<string>;
    externalBlocklist?: pulumi.Input<string>;
    fortiai?: pulumi.Input<string>;
    fortindr?: pulumi.Input<string>;
    fortisandbox?: pulumi.Input<string>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    outbreakPrevention?: pulumi.Input<string>;
    profile?: pulumi.Input<string>;
    quarantine?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectAntivirusProfileSmtp resource.
 */
export interface ObjectAntivirusProfileSmtpArgs {
    adom?: pulumi.Input<string>;
    archiveBlocks?: pulumi.Input<pulumi.Input<string>[]>;
    archiveLogs?: pulumi.Input<pulumi.Input<string>[]>;
    avScan?: pulumi.Input<string>;
    contentDisarm?: pulumi.Input<string>;
    emulator?: pulumi.Input<string>;
    executables?: pulumi.Input<string>;
    externalBlocklist?: pulumi.Input<string>;
    fortiai?: pulumi.Input<string>;
    fortindr?: pulumi.Input<string>;
    fortisandbox?: pulumi.Input<string>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    outbreakPrevention?: pulumi.Input<string>;
    profile: pulumi.Input<string>;
    quarantine?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
